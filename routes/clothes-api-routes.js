var db = require("../models");

module.exports = function(app) {

  app.get("/api/clothes", function(req, res) {
    var query = {};
    if (req.query.info_id) {
      query.InfoId = req.query.info_id;
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

  // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });
};