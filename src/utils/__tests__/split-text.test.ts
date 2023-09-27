import { splitText } from "../split-text";

describe("splitText", () => {
  it("should split text", () => {
    expect(splitText("asdf asdf asdf", 5)).toStrictEqual([
      "asdf ",
      "asdf ",
      "asdf",
    ]);
  });

  it("should round chunk size according to white spaces", () => {
    expect(splitText("asdf asdf asdf", 6)).toStrictEqual([
      "asdf ",
      "asdf ",
      "asdf",
    ]);

    expect(splitText("asdf asdf asdf", 8)).toStrictEqual([
      "asdf ",
      "asdf ",
      "asdf",
    ]);
  });

  it("should work when chunk size is less then text length", () => {
    expect(splitText("asdf asdf asdf", 20)).toBe("asdf asdf asdf");
  });
});
