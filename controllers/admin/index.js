const AdminModel = require('../../models/admin')
const UserModel = require('../../models/user')
const CommentModel = require('../../models/comment')
const MatchModel = require('../../models/match')
const ProjectModel = require('../../models/project')

const md5 = require('md5')

class Admin {
    async initModel(ctx) {
        await AdminModel.sync()
        await UserModel.sync()
        await CommentModel.sync()
        await MatchModel.sync()
        await ProjectModel.sync()

        await AdminModel.create({
            adminAccount: 'APeng',
            adminPassword: md5('123456')
        })

        ctx.body = {
            status: 'success'
        }
    }
}

module.exports = new Admin()