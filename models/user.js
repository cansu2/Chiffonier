module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    User.associate = function(models) {
      // Associating Author with casual clothing
      // When a User is deleted, also delete any associated items
      User.hasMany(models.Casual, {
        onDelete: "cascade"
      });
    };

    User.associate = function(models) {
        // Associating Author with formal clothing
        // When a User is deleted, also delete any associated items
        User.hasMany(models.Formal, {
          onDelete: "cascade"
        });
      };
  
    return User;
  };