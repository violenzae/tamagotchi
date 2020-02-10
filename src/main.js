import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Ager } from './calc';

$(document).ready(function() {
  $("form#planetage").submit(function(event) {
    event.preventDefault();

    const gender = $("#gender").val();
    const race = $("#race").val();
    const education = $("#education").val();
    const planet = $("#planet").val();
    const earthAge = parseInt($("#age").val());    

    let newAger = new Ager(planet, earthAge, gender, race, education);

    const planetAge = newAger.baseAgeConvert();
    const earthExpectancy = newAger.expectancyEarthTotaler();
    const planetRemain = newAger.remainConvert();
    const overExpectancy = newAger.excessYearToPos();

    $("#years-over").hide();
    $("#years-left").hide();

    $(".results-col").show();
    $("#planet-name").text(planet);
    $("#age-entered").text(earthAge);
    $("#planet-age").text(planetAge);
    $("#earth-expectancy").text(earthExpectancy);

    $("#planet-remain").text(planetRemain); 
    $("#planet-over").text(overExpectancy);

    if (planetRemain >= 0) {
      $("#years-left").show();
    } else { 
      $("#years-over").show();
    }

    $("#planet-remain").text(planetRemain); 
    $("#planet-over").text(overExpectancy);
    
  });
});