const AdminModel = require('../../models/admin')
const UserModel = require('../../models/user')
const CommentModel = require('../../models/comment')
const MatchModel = require('../../models/match')
const ProjectModel = require('../../models/project')

class Admin {
    async initModel(ctx) {
        await AdminModel.sync()
        await UserModel.sync()
        await CommentModel.sync()
        await MatchModel.sync()
        await ProjectModel.sync()

        ctx.body = {
            status: 'success'
        }
    }
}

module.exports = new Admin()