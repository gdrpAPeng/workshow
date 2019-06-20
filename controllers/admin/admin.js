const jwt = require('../../utils/jwt')
const md5 = require('md5')
const AdminModel = require('../../models/admin')

class Admin {
    async login(ctx, next) {
        const { account, password } = ctx.request.body
        
        const result = await AdminModel.findOne({
            where: {
                adminAccount: account,
                adminPassword: md5(password)
            }
        })

        let token = await jwt.generateToken({
            id: result.id
        })

        ctx.body = {
            token
        }
    }
}

module.exports = new Admin()