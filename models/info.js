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
  return Info;
};

