const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

const Admin = sequelize.define('admin', {
    adminAccount: {
        type: Sequelize.STRING,
        field: 'addmin_account',
        allowNull: false
    },
    adminPassword: {
        type: Sequelize.STRING,
        field: 'admin_password',
        allowNull: false
    }
}, {
    tableName: 'admin'
})

module.exports = Admin