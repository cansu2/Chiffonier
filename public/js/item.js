const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

$(document).ready(function() {
 
    // Getting jQuery references to the post body, title, form, and category select
    var itemName = $("#itemName");
    var itemColor = $("#color");
    var itemType = $("#itemType");
    var itemWarmth = $("#itemWarmth");
    var itemPicture = $("#itemPic");
    
    // Giving the postCategorySelect a default value
    // postCategorySelect.val("Personal");
    // Adding an event listener for when the form is submitted
    $("#add-btn").on("click", function handleFormSubmit(event) {
      event.preventDefault();
      console.log("joe");
      // Wont submit the post if we are missing a body or a title
      if (!itemName.val().trim() || !itemColor.val().trim()) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newClothes = {
        itemName: itemName.val().trim(),
        type: itemType.val(),
        color: itemColor.val(),
        warmth: itemWarmth.val(),
        picture: itemPicture.val()
      };
  
      console.log(newClothes);

    $.post("/api/clothes", newClothes)
    .done(function(arg){
       
        alert("new item added")
        window.location.href = "/basic_table.html";
    });
  
});

app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

  });
  