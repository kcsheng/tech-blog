const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      vailidate: {
        len: [5],
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20],
      },
    },
    creator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: id,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    unserscored: true,
    modelName: "article",
  }
);
