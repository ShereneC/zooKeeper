export default class Centipede {

  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {Boolean} goodGuy 
   * @param {Number} sizeInCM 
   */
  constructor(
    name = '',
    color = '',
    goodGuy = true,
    sizeInCM = 0,
  ) {
    this.name = name;
    this.color = '';
    this.goodGuy = true;
    this.sizeInCM = '';
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}!`)
  }

  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}`)
  }
}