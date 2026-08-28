import { describe, it, expect } from "vitest";
import { roadmapGroups, roadmapPaths } from "@/data/roadmap";

describe("roadmap グループ定義", () => {
  it("id が重複していないこと", () => {
    const ids = roadmapGroups.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("すべてのグループに label と description があること", () => {
    for (const group of roadmapGroups) {
      expect(group.label, group.id).toBeTruthy();
      expect(group.description, group.id).toBeTruthy();
    }
  });

  it("id が kebab-case であること", () => {
    for (const group of roadmapGroups) {
      expect(group.id).toMatch(/^[a-z]+(-[a-z]+)*$/);
    }
  });

  it("空のグループが存在しないこと", () => {
    const used = new Set(roadmapPaths.map((p) => p.group));
    const empty = roadmapGroups.filter((g) => !used.has(g.id)).map((g) => g.id);
    expect(empty, `パスが1本もないグループ:\n${empty.join("\n")}`).toEqual([]);
  });
});

describe("roadmap パス定義", () => {
  it("id が重複していないこと", () => {
    const ids = roadmapPaths.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("すべてのパスが定義済みのグループへ属していること", () => {
    const known = new Set(roadmapGroups.map((g) => g.id));
    const orphans = roadmapPaths
      .filter((p) => !known.has(p.group))
      .map((p) => `${p.id} -> ${p.group}`);
    expect(orphans, `未定義グループへの参照:\n${orphans.join("\n")}`).toEqual(
      [],
    );
  });

  it("level が beginner / practical のいずれかであること", () => {
    for (const path of roadmapPaths) {
      expect(["beginner", "practical"], path.id).toContain(path.level);
    }
  });

  /**
   * 実践しかない分野は、初学者の入口が無いことを意味する。
   * ai-tools / web-service / security は入門から始められる状態を保つ。
   */
  it("入口が必要なグループに入門パスが存在すること", () => {
    const needsBeginner = ["ai-tools", "web-service", "security"];
    for (const groupId of needsBeginner) {
      const hasBeginner = roadmapPaths.some(
        (p) => p.group === groupId && p.level === "beginner",
      );
      expect(hasBeginner, `${groupId} に入門パスがない`).toBe(true);
    }
  });

  it("すべてのパスが1本以上のステップを持つこと", () => {
    for (const path of roadmapPaths) {
      expect(path.steps.length, path.id).toBeGreaterThan(0);
    }
  });

  it("同一パス内で ref が重複していないこと", () => {
    for (const path of roadmapPaths) {
      const refs = path.steps.map((s) => s.ref);
      expect(new Set(refs).size, `${path.id} に重複 ref がある`).toBe(
        refs.length,
      );
    }
  });

  it("すべてのステップに note があること", () => {
    for (const path of roadmapPaths) {
      for (const step of path.steps) {
        expect(step.note, `${path.id} / ${step.ref}`).toBeTruthy();
      }
    }
  });

  it("id が kebab-case であること", () => {
    for (const path of roadmapPaths) {
      expect(path.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });
});
