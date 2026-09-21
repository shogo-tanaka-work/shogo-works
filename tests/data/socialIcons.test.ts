import { describe, it, expect } from "vitest";
import { socialLinks } from "@/data/social";
import { iconPaths } from "@/components/icons/paths";

/**
 * paths.ts に無いアイコン名を socialLinks へ足すと、Icon.astro が空の SVG を描く。
 * 独自SVGを持つものだけを例外として明示し、それ以外は paths.ts に実在することを保証する。
 */
const CUSTOM_ICON_COMPONENTS = new Set(["note", "tiktok"]);

describe("social アイコン", () => {
  it("すべてのアイコン名が描画可能であること", () => {
    const available = new Set(Object.keys(iconPaths));

    for (const link of socialLinks) {
      const renderable =
        available.has(link.icon) || CUSTOM_ICON_COMPONENTS.has(link.icon);

      expect(renderable, `${link.name} の icon "${link.icon}" が未定義`).toBe(
        true,
      );
    }
  });
});
