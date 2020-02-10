export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happiness = 10;
    this.badPoints = 0;
    this.poops = 0;
    this.age = 0;
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 3000);
  }

  setBoredom() {
    setInterval(() => {
      this.happiness--;
    }, 4500);
  }

  setAge() {
    setInterval(() => {
      this.age++;
      // if (this.age === 1) {
      //   this.badPoints.pointCheck();
      // }
      // } else if (this.age ===3)
      this.badpoints = 0;
    }, 120000)
  }

    starvedCheck() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    }

    boredCheck() {
      if (this.happiness > 0) {
        return this.happiness;
      } else if (this.happiness <= -16) {
        return "runs away";
      } else {
        return true;
      }
    }

    feed() {
      this.foodLevel = 10;
      setTimeout(() => {
        this.poops += 1;
      }, 10000);
    }

    play() {
      this.happiness = 10;
    }

    clean() {
      this.poops = 0;
    }
}