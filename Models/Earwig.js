export default class Earwig {
  constructor(
    name = '',
    color = '',
    goodGuy = false,
    sizeInMM = 0,
    attractant = '',
    feature = '',
  ) {
    this.name = name;
    this.color = '';
    this.goodGuy = false;
    this.sizeInMM = '';
    this.attractant = '';
    this.feature = 'pincers'
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}!`)
  }

  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}`)
  }
}