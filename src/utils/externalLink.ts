export type LinkSource = "internal" | "external";

export function isExternalSource(source: LinkSource): boolean {
  return source === "external";
}

/**
 * 外部リンク時に <a> へ展開する追加属性を返す。
 * 内部リンク時は空オブジェクトを返す（spread しても無害）。
 */
export function externalLinkAttrs(
  source: LinkSource,
): { target: "_blank"; rel: "noopener noreferrer" } | Record<string, never> {
  if (isExternalSource(source)) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}
