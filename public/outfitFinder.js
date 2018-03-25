// connect to clothes table

// run thru array clothes
    // if (0 < weather <30 ) {
        // warmth  = 9 10 8
        // push array
    //  }
    //  30<weather<70{
        //  warmth = 7 6 5 4
    //  }
    //  70<weather<90{
        // warmth = 3 2 1
    //  }
// outfit array array[1] = top array[2] = bottom  array[3] = shoes
    // math.random top 
    // push to outfit array
    // math.random bottom
    // math.random shoes

// attr.() to the picture canvas in the html
var db = require("../models");

var array  = [];

var todayTemp = 0;
var tomorrowTemp = 0;

//take temperature

var queryURL = "https://api.darksky.net/forecast/3f01f0b65e47a50ee0477a2be1624c91/39.742043,-104.9903" ;

var icons = new Skycons({"color": "gray"}); 
$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
      todayTemp = response.currently.temperature;
      tomorrowTemp  = response.hourly.data[12].temperature;
  });

$("#combineToday").click(getCombine(todayTemp));
$("#combineTomorrow").click(getCombine(tomorrowTemp));


function getCombine(temp) {
    if (temp >= 0 && temp <= 30) {
        grabClothes()
    } else if (temp >= 30 && temp <= 70) {

    } else if (temp >= 70 && temp <= 90) {

    }
}


function grabClothes(arg){

}