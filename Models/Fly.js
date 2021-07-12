export default class Fly {

  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {Boolean} goodGuy 
   * @param {Number} sizeInMM 
   */
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