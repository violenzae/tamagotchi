import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let tamagotchi = new Tamagotchi();
  tamagotchi.name = prompt("What is your pet's name?")
  tamagotchi.setHunger();
  tamagotchi.setBoredom();
  tamagotchi.setAge();
  tamagotchi.updateStats();


  setInterval(deadFood, 5000);

  function deadFood() {
    console.log("bad = " + tamagotchi.badPoints + " age = " + tamagotchi.age);
    if (tamagotchi.foodLevel < 0) {
      alert("starved :(");
    }
    if (tamagotchi.happiness <= -16) {
      alert("RAN AWAY");
    }
    if (tamagotchi.age === 5) {
      alert("died of old age :)");
    }
    if (tamagotchi.age === 1 ) {
      if (tamagotchi.behavior === 0) {
        console.log("Good child");
      } else {
        console.log("Bad Child");
      }
    } else if (tamagotchi.age === 2) {
      if (tamagotchi.behavior === 0 ) {
        console.log("Good Adult");
      } else if (tamagotchi.behavior === 1 ) {
        console.log("Neutral Adult");
      } else {
        console.log("Bad Adult");
      }
    }
  }
  


  $("#name").text(tamagotchi.name);


  $("#feed").click(function(event) {
    event.preventDefault();
    tamagotchi.feed();
  });

  $("#play").click(function(event) {
    event.preventDefault();
    tamagotchi.play();
  });

  $("#clean").click(function(event) {
    event.preventDefault();
    tamagotchi.clean();
  });

});