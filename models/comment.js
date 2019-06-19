const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

const Comment = sequelize.define('comment', {
    projectId: {
        type: Sequelize.INTEGER,
        field: 'project_id',
        allowNull: false
    },
    commentContent: {
        type: Sequelize.STRING,
        field: 'comment_content',
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    }
}, {
    tableName: 'comment'
})

module.exports = Comment