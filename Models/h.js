export default class Aphid {
  constructor(
    name = '',
    color = '',
    goodGuy = false,
    sizeInMM = 0,
  ) {
    this.name = name;
    this.color = '';
    this.goodGuy = false;
    this.sizeInMM = '';
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}!`)
  }

  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}`)
  }
}