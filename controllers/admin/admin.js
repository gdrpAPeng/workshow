const jwt = require('../../utils/jwt')
const md5 = require('md5')
const AdminModel = require('../../models/admin')
const Base = require('../base')

class Admin {
    async login(ctx, next) {
        const { account, password } = ctx.request.body
        
        const result = await AdminModel.findOne({
            where: {
                adminAccount: account,
                adminPassword: md5(password)
            }
        })
        if(!result) {
            ctx.body = {
                msg: '没有找到'
            }
            return;
        } else {
            let token = await jwt.generateToken({
                id: result.id
            })
    
            ctx.body = {
                token
            }
        }
    }

    async getAdminList(ctx, next) {   
        const data = await AdminModel.findAll()
        ctx.body = Base.formatResult(0, 'success', data) 
    }

    async addOneAdmin(ctx) {
        const { account, password } = ctx.request.body
        const result = await AdminModel.create({
            adminAccount: account,
            adminPassword: md5(password)
        })
        if(result) {
            ctx.body = {
                msg: '添加成功'
            }
        } else {
            ctx.body = {
                msg: '添加失败'
            }
        }
    }
}

module.exports = new Admin()