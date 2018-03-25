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

// var icons = new Skycons({"color": "gray"}); 
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
        grabClothes(3)
    } else if (temp >= 30 && temp <= 70) {
        grabClothes(2)
    } else if (temp >= 70 && temp <= 90) {
        grabClothes(1)
    }
}

var newBottoms = [];

var bottoms1 = [];
var tops1 = [];

var shoes = [];

var bottoms2 = [];
var tops2 = [];

var bottoms3 = [];
var tops3 = [];

var url = window.location.search;
        var infoId;

        if (url.indexOf("?info_id=") !== -1) {
        infoId = url.split("=")[1];
        getPosts(infoId);
        }
        else {
        getClothes();
        }


        getClothes();
    function getClothes(info) {
            infoId = info || "";
            if (infoId) {
            infoId = "/?info_id=" + infoId;
            }
            $.get("/api/clothes" + infoId, function(data) {
                console.log("Clothes", data);

                // console.log(data[1].itemName);
                clothes = data;
            
                var warm = data.warmth
                newBottoms.push(clothes.filter(item=>item.type == "Bottom"));
                console.log(newBottoms);
                if (warm == 1){

                   bottoms1.push(data["Bottom"]);
                   tops1.push(data["Top"]);
                   shoes.push(data["Shoes"]);

                } else if (warm == 2) {

                    bottoms2.push(data["Bottom"]);
                    tops2.push(data["Top"]);
                    shoes.push(data["Shoes"]);

                } else if (warm == 3) {

                    bottoms3.push(data["Bottom"]);
                    tops3.push(data["Top"]);
                    shoes.push(data["Shoes"]);
                }

                
            });
    }
var outfit = [];

function grabClothes(arg){  
    // run filter that matches number passed in
            newBottoms.push(clothes.filter(item=>item.type == "Bottom" && item.warmth == arg));
            console.log(newBottoms); 
            var bottom = newBottoms[Math.floor(newBottoms.length * math.random())];
        if (arg == 1 ){
            

            var top = tops1[Math.floor(tops1.length * math.random())];
           
            var shoes = shoes[Math.floor(shoes.length * math.random())];
            outfit.push(top)
            outfit.push(bottom)
            outfit.push(shoes)


        } else if (arg == 2) {

            var top = tops2[Math.floor(tops2.length * math.random())];
            var bottom = bottoms2[Math.floor(bottoms2.length * math.random())];
            var shoes = shoes[Math.floor(shoes.length * math.random())];
            outfit.push(top)
            outfit.push(bottom)
            outfit.push(shoes)     

        
        } else if (arg == 3) {
            var top = tops3[Math.floor(tops3.length * math.random())];
            var bottom = bottoms3[Math.floor(bottoms3.length * math.random())];
            var shoes = shoes[Math.floor(shoes.length * math.random())];
            outfit.push(top)
            outfit.push(bottom)
            outfit.push(shoes)

        }
        return outfit
}