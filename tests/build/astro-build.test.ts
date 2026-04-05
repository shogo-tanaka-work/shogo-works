import { describe, it, expect } from "vitest";
import { execSync } from "node:child_process";

const TIMEOUT = 60_000;
const MAX_BUFFER = 10 * 1024 * 1024; // 10MB

describe("Astro build", () => {
  it("astro check が正常終了すること", () => {
    expect(() => {
      execSync("npx astro check", {
        timeout: TIMEOUT,
        stdio: "pipe",
        maxBuffer: MAX_BUFFER,
      });
    }).not.toThrow();
  }, TIMEOUT);

  it("astro build が正常終了すること", () => {
    expect(() => {
      execSync("npx astro build", {
        timeout: TIMEOUT,
        stdio: "pipe",
        maxBuffer: MAX_BUFFER,
      });
    }).not.toThrow();
  }, TIMEOUT);
});
