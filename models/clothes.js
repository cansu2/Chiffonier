module.exports = function(sequelize, DataTypes) {
  var Clothes = sequelize.define("Clothes", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1,100]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
          len: [1,100]
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1,100]
      }
    },
    warmth: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
  }
  });


  
  return Clothes;
};




