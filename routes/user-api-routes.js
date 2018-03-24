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

  // This is for a user to create a new item in their closet
  app.post("/api/newUser", function(req, res) {
    db.Info.create(req.body).then(function(dbInfo) {
      res.json(dbInfo);
    });
  });

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
