export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happiness = 10;
    this.badPoints = 0;
    this.poops = [];
    this.age = 0;
    this.behavior = 0;
    this.form = "Baby "
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
      if (this.age === 4) {
        this.foodLevel--;
      }
    }, 3000);
  }

  setBoredom() {
    setInterval(() => {
      this.happiness--;
      this.boredCheck();
    }, 4500);
  }

  updateStats() {
    setInterval(() => {
      let foodLevel = this.foodLevel;
      let happiness = this.happiness;
      let poops = this.poops;
      document.getElementById("food").innerHTML = foodLevel;
      document.getElementById("happiness").innerHTML = happiness;
      // document.getElementById("poops").innerHTML = poops;
    }, 1000);
  }

  setAge() {
    setInterval(() => {
      this.age++;
      console.log(typeof this.badPoints + " " + typeof this.age);
      this.badPoints += this.poops.length;
      if (this.age === 1 || this.age === 2) {
        if (this.badPoints >= 2) {
          this.behavior++;
        }
      }
      this.badpoints = 0;
    }, 10000);
  }

  starvedCheck() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  boredCheck() {
    if (this.happiness > 3) {
      return this.happiness;
    } else {
      this.badPoints++;
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
    setTimeout(() => {
      this.poops.push(1);
    }, 1000);
  }

  play() {
    this.happiness = 10;
  }

  clean() {
    this.poops = [];
  }
}