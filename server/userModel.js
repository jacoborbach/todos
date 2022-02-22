const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "d2p3f26rdd3k4g",
  "scnrgswpnunwcq",
  "e378be67e6ea870280946f9c5d2481dada2a666f0544857f99ee9f8a1fc9c511",
  {
    host: "ec2-3-248-103-75.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",

    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);

class User extends Model {}
User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    users: DataTypes.STRING,
  },
  { sequelize, modelName: "user", timestamps: false }
);

exports.User = User;
