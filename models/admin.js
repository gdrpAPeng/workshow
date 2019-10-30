const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')
const moment = require('moment')

const Admin = sequelize.define('admin', {
    adminAccount: {
        type: Sequelize.STRING,
        field: 'admin_account',
        allowNull: false
    },
    adminPassword: {
        type: Sequelize.STRING,
        field: 'admin_password',
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
        }
    },
}, {
    tableName: 'admin'
})

module.exports = Admin