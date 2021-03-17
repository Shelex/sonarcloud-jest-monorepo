const helloWorld = require('./helloWorld')
const custom = require('./fns')

module.exports = {
    name: 'hilarious_hamster',
    hello: helloWorld.hello,
    world: helloWorld.world,
    fn1: custom.fn1,
    fn2: custom.fn2,
    fn3: custom.fn3,
    fn4: custom.fn4,
    fn5: custom.fn5,
    fn6: custom.fn6,
    fn7: custom.fn7  
}