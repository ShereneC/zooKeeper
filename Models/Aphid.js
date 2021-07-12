export default class Aphid {

  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {Boolean} goodGuy 
   * @param {Number} sizeInMM 
   * @param {String} destructionValue 
   */
  constructor(
    name = '',
    color = '',
    goodGuy = false,
    sizeInMM = 0,
    destructionValue = ''
  ) {
    this.name = name;
    this.color = '';
    this.goodGuy = false;
    this.sizeInMM = '';
    this.destructionValue = '';
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}!`)
  }

  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}`)
  }
}