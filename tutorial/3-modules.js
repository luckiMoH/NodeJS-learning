// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share miniumum)

const names = require('./4-names')
const {sayHi, sayHello} = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade');

sayHi(names.john);
sayHi(names.peter);
sayHello(names.john);
sayHello(names.peter);
