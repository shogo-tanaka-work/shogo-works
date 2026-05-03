// Zenn .znc の本文 DOM を Markdown に変換するための関数を返す式。
// browser-use eval にこのファイルの中身を渡して実行する。
(() => {
  const root = document.querySelector('.znc') || document.querySelector('article');
  if (!root) return JSON.stringify({ error: 'NO_CONTENT' });

  const esc = (s) => s.replace(/([\\`*_{}\[\]()#+\-.!|>])/g, '\\$1');

  const inline = (node) => {
    if (node.nodeType === 3) return node.textContent;
    if (node.nodeType !== 1) return '';
    const tag = node.tagName.toLowerCase();
    const kids = [...node.childNodes].map(inline).join('');
    switch (tag) {
      case 'strong':
      case 'b': return `**${kids}**`;
      case 'em':
      case 'i': return `*${kids}*`;
      case 'code': return `\`${node.textContent}\``;
      case 'a': {
        const href = node.getAttribute('href') || '';
        const txt = kids.trim();
        // Zenn の見出しアンカー（中身が空 or アイコンのみ）はスキップ
        if (!txt) return '';
        return `[${kids}](${href})`;
      }
      case 'br': return '  \n';
      case 'img': {
        const src = node.getAttribute('src') || '';
        const alt = node.getAttribute('alt') || '';
        return `![${alt}](${src})`;
      }
      case 'del':
      case 's': return `~~${kids}~~`;
      default: return kids;
    }
  };

  const block = (node, depth = 0) => {
    if (node.nodeType === 3) {
      const t = node.textContent.trim();
      return t ? t + '\n\n' : '';
    }
    if (node.nodeType !== 1) return '';
    const tag = node.tagName.toLowerCase();

    // 見出し
    if (/^h[1-6]$/.test(tag)) {
      const lvl = parseInt(tag[1], 10);
      // h1 はタイトル扱いで本文では使われない想定。h2 以降そのまま。
      const text = inline(node).trim();
      // Zenn のアンカーリンク用 svg 等を除去
      const clean = text.replace(/\s+/g, ' ').replace(/^#\s*/, '');
      return `${'#'.repeat(lvl)} ${clean}\n\n`;
    }

    if (tag === 'p') {
      const t = inline(node).trim();
      return t ? t + '\n\n' : '';
    }

    if (tag === 'ul' || tag === 'ol') {
      const items = [...node.children].filter(c => c.tagName.toLowerCase() === 'li');
      let out = '';
      items.forEach((li, i) => {
        const marker = tag === 'ol' ? `${i + 1}.` : '-';
        // li 内のネストリストを分離
        const liChildren = [...li.childNodes];
        const inlineParts = [];
        const blockParts = [];
        for (const c of liChildren) {
          if (c.nodeType === 1 && (c.tagName === 'UL' || c.tagName === 'OL')) {
            blockParts.push(c);
          } else {
            inlineParts.push(c);
          }
        }
        const inlineText = inlineParts.map(inline).join('').trim();
        out += `${'  '.repeat(depth)}${marker} ${inlineText}\n`;
        for (const nested of blockParts) {
          out += block(nested, depth + 1);
        }
      });
      return out + (depth === 0 ? '\n' : '');
    }

    if (tag === 'pre') {
      // Zenn は <pre><code class="language-xxx">...</code></pre> もしくは
      // <div class="code-block-container"><div class="code-block-filename-container">...</div><pre>...</pre></div>
      const codeEl = node.querySelector('code');
      let lang = '';
      if (codeEl) {
        const cls = codeEl.className || '';
        const m = cls.match(/language-([\w+-]+)/);
        if (m) lang = m[1];
      }
      const code = (codeEl ? codeEl.textContent : node.textContent).replace(/\n$/, '');
      return '```' + lang + '\n' + code + '\n```\n\n';
    }

    if (tag === 'div') {
      // ファイル名つきコードブロックのコンテナ
      if (node.classList.contains('code-block-container')) {
        const fnameEl = node.querySelector('.code-block-filename-container, .code-block-filename');
        const fname = fnameEl ? fnameEl.textContent.trim() : '';
        const pre = node.querySelector('pre');
        const codeEl = pre ? pre.querySelector('code') : null;
        let lang = '';
        if (codeEl) {
          const m = (codeEl.className || '').match(/language-([\w+-]+)/);
          if (m) lang = m[1];
        }
        const code = (codeEl ? codeEl.textContent : (pre ? pre.textContent : '')).replace(/\n$/, '');
        const head = '```' + lang + (fname ? `:${fname}` : '');
        return head + '\n' + code + '\n```\n\n';
      }
      // Zenn の :::message / :::details などはクラスから判定
      if (node.classList.contains('msg') || node.classList.contains('message')) {
        const type = node.classList.contains('alert') ? 'alert' : 'message';
        const inner = [...node.childNodes].map(c => block(c, depth)).join('').trim();
        return `:::${type}\n${inner}\n:::\n\n`;
      }
      if (node.classList.contains('details')) {
        const summary = node.querySelector('summary');
        const summaryText = summary ? summary.textContent.trim() : '詳細';
        const body = [...node.childNodes]
          .filter(c => !(c.nodeType === 1 && c.tagName === 'SUMMARY'))
          .map(c => block(c, depth)).join('').trim();
        return `:::details ${summaryText}\n${body}\n:::\n\n`;
      }
      // 一般 div は中身を再帰
      return [...node.childNodes].map(c => block(c, depth)).join('');
    }

    if (tag === 'blockquote') {
      const inner = [...node.childNodes].map(c => block(c, 0)).join('').trim();
      return inner.split('\n').map(l => '> ' + l).join('\n') + '\n\n';
    }

    if (tag === 'hr') return '---\n\n';

    if (tag === 'table') {
      const rows = [...node.querySelectorAll('tr')];
      if (!rows.length) return '';
      const cells = rows.map(r => [...r.children].map(c => inline(c).trim().replace(/\n+/g, ' ')));
      const head = cells[0];
      const body = cells.slice(1);
      const sep = head.map(() => '---');
      const fmt = (row) => '| ' + row.join(' | ') + ' |';
      return [fmt(head), fmt(sep), ...body.map(fmt)].join('\n') + '\n\n';
    }

    if (tag === 'a' || tag === 'img' || tag === 'span' || tag === 'strong' || tag === 'em' || tag === 'code') {
      // ブロック直下にインライン要素が来た場合
      return inline(node) + '\n\n';
    }

    // 不明タグは子を再帰
    return [...node.childNodes].map(c => block(c, depth)).join('');
  };

  const md = [...root.childNodes].map(c => block(c, 0)).join('').replace(/\n{3,}/g, '\n\n').trim();
  return JSON.stringify({ chars: md.length, markdown: md });
})();
