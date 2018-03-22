var db = require("../models");

module.exports = function(app) {
  // This is the route for finding all items in a user's closet.
  // It should show all their items the casual and formal tables.
<<<<<<< HEAD
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
=======
  app.get("/api/newUser", function(req, res) {
    db.Info.findAll({
      include: [db.Info]
    }).then(function(dbInfo) {
      res.json(dbInfo);
>>>>>>> 200f6c90bcf6475e04957f76d015072e0e4b8c6d
    });
  });

  // Here we show a user one item of clothing
<<<<<<< HEAD
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
=======
  app.get("/api/newUser/:id", function(req, res) {
    db.Info.findOne({
>>>>>>> 200f6c90bcf6475e04957f76d015072e0e4b8c6d
      where: {
        id: req.params.id
      },
      include: [db.Info]
    }).then(function(dbInfo) {
      res.json(dbInfo);
    });
  });

  // This is for a user to create a new item in their closet
<<<<<<< HEAD
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
=======
  app.post("/api/newUser", function(req, res) {
    db.Info.create(req.body).then(function(dbInfo) {
      res.json(dbInfo);
>>>>>>> 200f6c90bcf6475e04957f76d015072e0e4b8c6d
    });
  });

  // this allows a user to delete an item from their closet
<<<<<<< HEAD
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
=======
  // app.delete("/api/user/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
>>>>>>> 200f6c90bcf6475e04957f76d015072e0e4b8c6d

};