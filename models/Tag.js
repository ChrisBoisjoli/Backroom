const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
//     Tagdefine columns

// id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
// Integer.
// Doesn't allow null values.
// Set as primary key.
// Uses auto increment.

// tag_name
tag_name:{
  type: DataTypes.STRING,
},
// String.
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
