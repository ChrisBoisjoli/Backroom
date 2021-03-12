const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}


Category.init(
  {
    // define columns
    //Category

  //id
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  //integer
  //notnull
  //primary key
  //autoincrement

  // category_name
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // String.
  // Doesn't allow null values.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
