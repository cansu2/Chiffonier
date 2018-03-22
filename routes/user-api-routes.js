var db = require("../models");

module.exports = function(app) {
  // This is the route for finding all items in a user's closet.
  // It should show all their items the casual and formal tables.
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Here we show a user one item of clothing
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // This is for a user to create a new item in their closet
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // this allows a user to delete an item from their closet
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};