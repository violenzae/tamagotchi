export class Ager {
  constructor(planet, earthAge, gender, race, education, planetAge, earthExpectancy, planetRemain, overExpectancy){
    this.planet = planet;
    this.earthAge = earthAge;
    this.gender = gender;
    this.race = race;
    this.education = education;
    this.planetAge = planetAge;
    this.earthExpectancy = earthExpectancy;
    this.planetRemain = planetRemain;
    this.overExpectancy = overExpectancy;
  }

  baseAgeConvert() {
    if(this.planet === "Mercury") {
      this.planetAge = Math.floor(this.earthAge/.24);
      return this.planetAge;
    } else if(this.planet === "Venus") {
      this.planetAge = Math.floor(this.earthAge/.62);
      return this.planetAge;
    } else if(this.planet === "Mars") {
      this.planetAge = Math.floor(this.earthAge/1.88);
      return this.planetAge;
    } else if(this.planet === "Jupiter") {
      this.planetAge = Math.floor(this.earthAge/11.86);
      return this.planetAge;
    }
  }

  expectancyDemo() {
    this.earthExpectancy = 0;
    if (this.gender === "Female" && this.race === "White") {
      return this.earthExpectancy += 81;
    } else if (this.gender === "Male" && this.race === "White") {
      return this.earthExpectancy += 76;
    } else if (this.gender === "Female" && this.race === "Black") {
      return this.earthExpectancy += 78;
    } else if (this.gender === "Male" && this.race === "Black") {
      return this.earthExpectancy +=72;
    } else if (this.gender === "Female" && this.race === "Asian") {
      return this.earthExpectancy += 88;
    } else if (this.gender === "Male" && this.race === "Asian") {
      return this.earthExpectancy += 84;
    } else if (this.gender === "Female" && this.race === "Hispanic") {
      return this.earthExpectancy += 85;
    } else if (this.gender === "Male" && this.race === "Hispanic") {
      return this.earthExpectancy += 80;
    } 
  }

  expectancyEdu() {
    if (this.gender === "Female" && this.education === "Bachelors") {
      return this.earthExpectancy += 3;
    } else if (this.gender === "Male" && this.education === "Bachelors") {
      return this.earthExpectancy += 2;
    } else if (this.gender === "Male" && this.education === "No Highschool") {
      return this.earthExpectancy -= 7;
    } else if (this.gender === "Female" && this.education === "No Highschool") {
      return this.earthExpectancy -=6;
    }
  }

  expectancyEarthTotaler() {
    this.expectancyDemo() + this.expectancyEdu();
    return this.earthExpectancy;
  }
 
  remainConvert() {
    if (this.planet === "Mercury") {
      this.planetRemain = Math.floor((this.earthExpectancy - this.earthAge)/.24);
      return this.planetRemain;
    } else if(this.planet === "Venus") {
      this.planetRemain = Math.floor((this.earthExpectancy - this.earthAge)/.62);
      return this.planetRemain;
    } else if(this.planet === "Mars") {
      this.planetRemain = Math.floor((this.earthExpectancy - this.earthAge)/1.88);
      return this.planetRemain;
    } else if(this.planet === "Jupiter") {
      this.planetRemain = Math.floor((this.earthExpectancy - this.earthAge)/11.86);
      return this.planetRemain;
    }
  }


  excessYearToPos() {
    if (this.remainConvert() < 0) {
      this.overExpectancy = ((this.remainConvert())*-1);
      return this.overExpectancy;
    }
  }
}