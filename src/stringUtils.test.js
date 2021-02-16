import hyphenate from "./stringUtils";

describe("hyphenate", () => {
  it("should return a string with characters separated by hyphens when it receives a single argument", () => {
    expect(hyphenate("pepperoni")).toBe("p-e-p-p-e-r-o-n-i");
  });
  it("should return a string with characters separated by hyphens, and words separated by spaces, when it receives multiple arguments", () => {
    expect(hyphenate("dominos", "pizza")).toBe("d-o-m-i-n-o-s p-i-z-z-a");
  });
});
