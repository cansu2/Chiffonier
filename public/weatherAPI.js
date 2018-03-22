$(document).on("click", ".apiLink", function(event) {
    var clickedCurr = $(this).attr("data-currencyName");
    console.log(clickedCurr);
  
    // var queryURL =
    //   "api.openweathermap.org/data/2.5/forecast?zip="+ zipCode + ",us" +
    //   "&apiKey=492ddf28a81e9cb86304d12b2c8a8f03";

    //api test Denver
    
    var queryURL =
    "api.openweathermap.org/data/2.5/forecast?zip=80204,us" +
    "&apiKey=492ddf28a81e9cb86304d12b2c8a8f03";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      console.log(queryURL);
  
      var arrayTitles = [];
    
      var newDate = String(date).substr(4, 11);
  
  
   })
  });