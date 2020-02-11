import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let tamagotchi = new Tamagotchi();
  tamagotchi.name = prompt("What is your pet's name?");
  tamagotchi.setHunger();
  tamagotchi.setBoredom();
  tamagotchi.setAge();
  tamagotchi.updateStats();

  const url = $.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${tamagotchi.name.toLowerCase()}&limit=1&weirdness=10`);
  url.done(function(data) {
    document.getElementById("img-output").src = data.data.images.original.url;
  });


  function deathEvent() {
    tamagotchi.stats = `<p><em>Food Level: </em>${tamagotchi.foodLevel}</p><br>
    <p><em>Happiness Level: </em>${tamagotchi.happiness}</p><br>
    <p><em>Final Age: </em>${tamagotchi.age}</p><br>
    <p><em>Final Form: </em>${tamagotchi.form}</p><br>
    <p><em>Death: </em>${tamagotchi.death}</p><br>`;
    $("#stats").html(tamagotchi.stats);
    $('#myModal').modal('show');
    for (var i = 1; i < 99999; i++)
      window.clearInterval(i);
  }

  setInterval(deadFood, 1000);

  function deadFood() {
    if (tamagotchi.foodLevel < 0) {
      tamagotchi.death = "Starved to death";
      deathEvent();
    }
    if (tamagotchi.happiness <= -16) {
      tamagotchi.death = "Ran away";
      deathEvent();
    }
    if (tamagotchi.age === 5) {
      tamagotchi.death = "Old Age";
      deathEvent();
    }
    if (tamagotchi.age === 1 ) {
      if (tamagotchi.behavior === 0) {
        tamagotchi.form = "Good Child ";
      } else {
        tamagotchi.form = "Bad Child ";
      }
    } else if (tamagotchi.age === 2) {
      if (tamagotchi.behavior === 0 ) {
        tamagotchi.form = "Good Adult ";
      } else if (tamagotchi.behavior === 1 ) {
        tamagotchi.form = "Neutral Adult ";
      } else {
        tamagotchi.form = "Bad Adult ";
      } 
    } else if (tamagotchi.age === 4) {
      $("#old").text("Old ");
    }
    $("#form").text(tamagotchi.form);
  }
  


  $(".name").text(tamagotchi.name);
  $("#form").text(tamagotchi.form);

  $("#feed").click(function(event) {
    event.preventDefault();
    tamagotchi.feed();
    setTimeout(() => {
      $("#poops").empty();
      const poopStickers = $.get(`https://api.giphy.com/v1/stickers/random?api_key=${process.env.API_KEY}&tag=poop&limit=1&weirdness=2`);
      tamagotchi.poops.forEach(function() {
        poopStickers.done(function(data) {
          $("#poops").append(`<img src="${data.data.images.original.url}" height="50px">`);
        });
      });
    }, 1001);
  });

  $("#close-button").click(function() {
    document.location.reload(true);
  });

  $("#play").click(function(event) {
    event.preventDefault();
    tamagotchi.play();
  });

  $("#clean").click(function(event) {
    event.preventDefault();
    tamagotchi.clean();
    $("#poops").empty();
  });

});