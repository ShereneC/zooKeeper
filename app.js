// NOTE having these instances here allows me to console each instance and run the methods that are in the class files.
// import Aphid from './Models/Aphid.js'
// import Bee from './Models/Bee.js'
// import Centipede from './Models/Centipede.js'
// import Dragonfly from './Models/Dragonfly.js'
// import Earwig from './Models/Earwig.js'
// import Fly from './Models/Fly.js'

// let angie = new Aphid('angie', 'green', false, 1, 'high')
// let barney = new Bee('Barney', 'orange', true, 12, 'flowers')
// let cenny = new Centipede('Cenny', 'brown', true, 3)
// let dan = new Dragonfly('Dan', 'blue', true, 40, 'flowers')
// let ernie = new Earwig('Ernie', 'brown', false, 21, 'decaying wood')
// let flippy = new Fly('Flippy', 'black', false, 12)

// console.log(angie)
// console.log(barney)
// console.log(cenny)
// console.log(dan)
// console.log(ernie)
// console.log(flippy)

// angie.eat('kale')
// angie.speak('yummm!')

// NOTE Now I am attempting to create a class of my classes - i.e. zoo of goodGuys and zoo of badGuys
import showBeneficial from './Models/_Zoo.js'

window.zoo = new showBeneficial()