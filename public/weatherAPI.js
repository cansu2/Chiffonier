// Here we are building the URL we need to query the database

// for converting string format API to API
function convertWord(str) {
  var newStr =[];
  for (var i=0; i < str.length; i++){
   
    if (str[i] != "-"){
      newStr.push(str[i].toUpperCase());
    } else {
      newStr.push("_");
    }
  }

  return newStr.join("");
  // return newStr.toString();
  console.log(newStr.join(""));
}

//test here 
var proxy = 'https://cors-anywhere.herokuapp.com/';
var queryURL = "https://api.darksky.net/forecast/3f01f0b65e47a50ee0477a2be1624c91/39.742043,-104.9903" ;

var icons = new Skycons({"color": "gray"}); 
// Here we run our AJAX call to the DarkSky Weathere API
$.ajax({
    url: proxy + queryURL,
    method: "GET"
  })
  // We store all of the retrieved data inside of an object called "response"
  .done(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    //temperature

    $("#todayTemp").text("Temperature (F) " + response.currently.temperature);
    $("#tomorrowTemp").text("Temperature (F) " + response.hourly.data[12].temperature);

    console.log("Temperature (F): " + response.currently.temperature);

    console.log("tomorrow" + response.hourly.data[12].temperature);

    //icons
    var iconToday = convertWord(response.currently.icon);
    icons.set("iconToday", Skycons[iconToday]);

    console.log(iconToday);

    var iconTomorrow = convertWord(response.hourly.data[12].icon);
    icons.set("iconTomorrow", Skycons[iconTomorrow]);

    icons.play();

    console.log(response.currently.icon)
  });