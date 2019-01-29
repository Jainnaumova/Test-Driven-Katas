const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Returns exact string if string length is less than maxLen", () => {
    expect(wrap("Lorem ipsum dolor", 20)).to.equal("Lorem ipsum dolor");
  });
  it("Returns wrapped string if string length is more than maxLen", () => {
    expect(wrap("Lorem ipsum dolor sit eu amet.", 20)).to.equal(
      "Lorem ipsum dolor\n sit eu amet."
    );
  });
});
