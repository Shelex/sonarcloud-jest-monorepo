const {fn1, fn2, fn3, fn4, fn5, fn6, fn7, hello, world} = require('../src');

describe("hello world", () => {
    it("should return hello", () => {
        expect(hello()).toBe('hello')
    })
    it("should return world", () => {
        expect(world()).toBe('world')
    })
})

describe("others", () => {
    const value = 'kukusiki'
  it("fn1 return value", () => {
      expect(fn1(value)).toBe(value)
  });
  it("fn2 return value", () => {
    expect(fn2(value)).toBe(value)
});
it("fn3 return value", () => {
    expect(fn3(value)).toBe(value)
});
it("fn4 return value", () => {
    expect(fn4(value)).toBe(value)
});
it("fn5 return value", () => {
    expect(fn5(value)).toBe(value)
});
it("fn6 return value", () => {
    expect(fn6(value)).toBe(value)
});
it("fn7 return value", () => {
    expect(fn7(value)).toBe(value)
});
});