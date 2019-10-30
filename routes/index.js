const router = require('koa-router')({
  prefix: '/api'
})

const homeRouter = require('./home')
const adminRouter = require('./admin')

router.get('/', async (ctx, next) => {
  console.log('api')
  ctx.body = {
    target: 'api'
  }
})

router.use(homeRouter.routes(), homeRouter.allowedMethods())
router.use(adminRouter.routes(), adminRouter.allowedMethods())


module.exports = router
