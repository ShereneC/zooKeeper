export default class Bee {

  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {Boolean} goodGuy 
   * @param {Number} sizeInMM 
   * @param {String} attractant 
   */
  constructor(
    name = '',
    color = '',
    goodGuy = true,
    sizeInMM = 0,
    attractant = ''
  ) {
    this.name = name;
    this.color = '';
    this.goodGuy = true;
    this.sizeInMM = '';
    this.attractant = '';
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}!`)
  }

  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}`)
  }
}