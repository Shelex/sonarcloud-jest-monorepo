const {fn1, fn2, fn3, fn4, fn5, fn6, fn7, hello, world} = require('../src');

describe("hello world", () => {
    it("should return hello", () => {
        expect(hello()).toBe('hello')
    })
    it("should return world", () => {
        expect(world()).toBe('world')
    })
})