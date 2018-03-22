module.exports = function(sequelize, DataTypes) {
  var Info = sequelize.define("Info", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1,100]
      }
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1,100]
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1,100]
      }
    },
    userPic: {
      type: DataTypes.STRING,
      allowNull: false
  }
  });


  // not exactly sure how tf below will work.  need to assign each item to a user

  Info.associate = function(models) {
    // We're saying that a Post should belong to an User
    // An item of clothing can't be created without a user due to the foreign key constraint
    Info.hasMany(models.Clothes, {
      onDelete: "cascade"
    });
  };

  return Info;
};