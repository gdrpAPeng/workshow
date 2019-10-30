const Sequelize = require('sequelize')
const {host, database, user, password} = require('../config/mysql')

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    timezone: '+08:00',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = sequelize