const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const User = require('./user');
const Category = require('./category');
const Feature = require('./feature');
const Keyword = require('./keyword');
const Result = require('./result');

const db = {};
const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Category = Category;
db.Feature = Feature;
db.Keyword = Keyword;
db.Result = Result;

User.init(sequelize);
Category.init(sequelize);
Feature.init(sequelize);
Keyword.init(sequelize);
Result.init(sequelize);

User.associate(db);
Category.associate(db);
Feature.associate(db);
Keyword.associate(db);
Result.associate(db);

module.exports = db;
