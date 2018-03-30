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
$("#combineToday").click(showIt(today));
$("#combineTomorrow").click(getCombine(tomorrowTemp));
$("#combineToday").click(showIt(tomorrow));

// this uses the weather api to select warmth from our clohtes array
// arg 3 is for clothes with a warmth of 3
// arg 2 is for clothes with a warmth of 2
// arg 1 ''  '' 1
function getCombine(temp) {
    if (temp >= 0 && temp <= 30) {
        grabClothes(3)
    } else if (temp >= 30 && temp <= 70) {
        grabClothes(2)
    } else if (temp >= 70 && temp <= 90) {
        grabClothes(1)
    }
}

var bottoms = [];
var tops = [];
var shoes = [];
var bottom = "";
var top = "";
var shoe = "";

var url = window.location.search;
        var infoId;

        if (url.indexOf("?info_id=") !== -1) {
        infoId = url.split("=")[1];
        getPosts(infoId);
        }
        else {
        getClothes();
        }

    function getClothes(info) {
            infoId = info || "";
            if (infoId) {
            infoId = "/?info_id=" + infoId;
            }
            console.log(infoId);
            $.get("/api/clothes" + infoId, function(data) {
                console.log("Clothes", data);

                // console.log(data[1].itemName);
                clothes = data;
            
                // var warm = data.warmth;
                bottoms.push(clothes.filter(item=>item.type == "Bottom"));
                console.log(bottoms);
                tops.push(clothes.filter(item=>item.type == "Top"));
                shoes.push(clothes.filter(item=>item.type == "Shoes"));
    
        function grabClothes(arg) {  
        // run filter that matches number passed in
            bottoms.push(clothes.filter(item=>item.type == "Bottom" && item.warmth == arg));
            tops.push(clothes.filter(item=>item.type == "Top" && item.warmth == arg));
            shoes.push(clothes.filter(item=>item.type == "Shoes" && item.warmth == arg));

            console.log(bottoms); 
            console.log(tops);
            console.log(shoes);
            bottom = bottoms[Math.floor(bottoms.length * math.random())];
            top = tops[Math.floor(tops.length * math.random())];
            shoe = shoes[Math.floor(shoes.length * math.random())];

        }
    });
}

function showIt(something){
    var clothesContainerToday = something;

    var outfitDiv = $("<div>");

    var topName = $("<p>");
    var bottomName = $("<p>"); 
    var shoesName = $("<p>");

   topName.text(top);
   bottomName.text(bottom);
   shoesName.text(shoe);

   outfitDiv.append(topName)
   outfitDiv.append(bottomName)
   outfitDiv.append(shoesName)

   clothesContainerToday.append(outfitDiv)
    
}


    
   


//    var clothesContainerTomorrow = $(".content-panel tomorrow");
