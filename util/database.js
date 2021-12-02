const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'She2shoalemeeYi1maefohphaich7Ael', 
    { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;