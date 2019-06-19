const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

const Project = sequelize.define('project', {
    projectName: {
        type: Sequelize.STRING,
        field: 'project_name',
        allowNull: false
    },
    projectPath: {
        type: Sequelize.STRING,
        field: 'project_path'
    },
    matchId: {
        type: Sequelize.INTEGER,
        field: 'match_id',
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
}, {
    tableName: 'project'
})

module.exports = Project