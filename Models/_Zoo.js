import Aphid from './Aphid.js'
import Bee from './Bee.js'
import Centipede from './Centipede.js'
import Dragonfly from './Dragonfly.js'
import Earwig from './Earwig.js'
import Fly from './Fly.js'


let angie = new Aphid('angie', 'green', false, 1, 'high')
let barney = new Bee('Barney', 'orange', true, 12, 'flowers')
let cenny = new Centipede('Cenny', 'brown', true, 3)
let dan = new Dragonfly('Dan', 'blue', true, 40, 'flowers')
let ernie = new Earwig('Ernie', 'brown', false, 21, 'decaying wood')
let flippy = new Fly('Flippy', 'black', false, 12)

// NOTE this is not working - trying to create a class that has a method for putting the goodguys in a group.
// export default class Beneficial {
//   beneficials = []
//   beneficials.push(cenny)
//   console.log(beneficials)
// }

export default class Critters {
  constructor()
}