// I don't think we will need this entire file.  
// There is no reason to show all items our database unless
// we create an admin section of the app

// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();


var db = require("../models");

module.exports = function(app) {

  app.get("/api/clothes", function(req, res) {
    var query = {};
    if (req.query.Info_id) {
      query.InfoId = req.query.Info_id;
    }
    db.Clothes.findAll({
      where: query
    }).then(function(dbClothes) {
      res.json(dbClothes);
    });
  });

  app.get("/api/clothes/:id", function(req, res) {
    db.Clothes.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbClothes) {
      console.log(dbClothes);
      res.json(dbClothes);
    });
  });


  app.post("/api/clothes", function(req, res) {
    db.Clothes.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });




  //picture
  // app.use(fileUpload());
 
  // app.post('/api/clothes/picture', function(req, res) {
  //   if (!req.files)
  //     return res.status(400).send('No files were uploaded.');
   
  //   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  //   let sampleFile = req.files.sampleFile;
   
  //   // Use the mv() method to place the file somewhere on your server
  //   sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
  //     if (err)
  //       return res.status(500).send(err);
   
  //     res.send('File uploaded!');
  //   });
  // });


};