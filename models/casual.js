module.exports = function(sequelize, DataTypes) {
    var Casual = sequelize.define("Casual", {
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
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
          allowNull: false
      }
    });
  

    // not exactly sure how tf below will work.  need to assign each item to a user

    Casual.associate = function(models) {
      // We're saying that a Post should belong to an User
      // An item of clothing can't be created without a user due to the foreign key constraint
      Casual.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Casual;
  };