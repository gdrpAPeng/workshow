const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

const Match = sequelize.define('match', {
    matchName: {
        type: Sequelize.STRING,
        field: 'match_name',
        allowNull: false
    },
    matchFilePath: {
        type: Sequelize.STRING,
        field: 'match_file_path'
    },
    matchBeginTime: {
        type: Sequelize.DATE,
        field: 'match_begin_time',
        allowNull: false
    },
    matchEndTime: {
        type: Sequelize.DATE,
        field: 'match_end_time',
        allowNull: false
    },
    matchBeginUploadTime: {
        type: Sequelize.DATE,
        field: 'match_begin_Upload_time',
        allowNull: false
    },
    matchEndUploadTime: {
        type: Sequelize.DATE,
        field: 'match_end_upload_time',
        allowNull: false
    }
}, {
    tableName: 'match'
})

module.exports = Match