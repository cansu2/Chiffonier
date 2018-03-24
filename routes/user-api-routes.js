var db = require("../models");

module.exports = function(app) {
  // This is the route for finding all items in a user's closet.
  // It should show all their items the casual and formal tables.
  app.get("/api/newUser", function(req, res) {
    db.Info.findAll({
      include: [db.Info]
    }).then(function(dbInfo) {
      res.json(dbInfo);
    });
  });

  // Here we show a user one item of clothing
  app.get("/api/newUser/:id", function(req, res) {
    db.Info.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Info]
    }).then(function(dbInfo) {
      res.json(dbInfo);
    });
  });

  

  // app.post("/api/newUser", function(req, res) {
  //   db.Info.create(req.body).then(function(dbInfo) {
  //     res.json(dbInfo);
  //   });
  // });
  app.post("/api/newUser", function(req, res) {
    db.Info.findOne({
      where: {
        userEmail: req.body.userEmail
      }
    }).then(data => {
      console.log("this is user email " + req.body.userEmail);
      console.log(data);
        if (data == null) {           
          db.Info.create(req.body).then(function(dbInfo) {
          res.json(dbInfo);
          })
        } else {
          console.log("this user exists");
          res.json(data);          
        }        
    });
  });




      // (function(newUser){
      //    if (newUser){
      //      callback();
      //    } else {
      //      db.Info.create(req.body).then(function(dbInfo) {
      //        res.json(dbInfo)
      //        callback();
      //      })
      //    }
      //  })
  // this allows a user to delete an item from their closet
  // app.delete("/api/user/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

};