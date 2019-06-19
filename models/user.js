const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

const User = sequelize.define('user', {
    userName: {
        type: Sequelize.STRING,
        field: 'user_name',
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
            // TODO -- 加密
            this.setDataValue('password', val)
        }
    },
    nickname: {
        type: Sequelize.STRING,
    },
    mobile: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    school: {
        type: Sequelize.STRING
    },
    schoolClass: {
        type: Sequelize.STRING,
        field: 'school_class'
    },
    userType: {
        type: Sequelize.INTEGER,
        field: 'user_type'
    }
}, {
    tableName: 'user'
})

module.exports = User