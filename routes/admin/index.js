const jwt = require('../../utils/jwt')

const router = require("koa-router")({
  prefix: "/admin"
});

const adminRouter = require('./admin')
const userRouter = require('./user')

const adminController = require('../../controllers/admin')

// 拦截 token
router.use(async (ctx, next) => {
  console.log(ctx.request.url)
  const url = ctx.request.url
  const AccessToken = ctx.request.header.accesstoken
  const ignoreArray = ['/api/admin/login']
  if(ignoreArray.indexOf(url) >= 0) {
    await next()
  } else {
    const jwtResult = await checkToken(AccessToken)
    // TODO 检查 token
    if(!AccessToken || !jwtResult) {
      ctx.status = 401
      ctx.body = {
        msg: AccessToken? '请重新登录': '请先登录',
        AccessToken: AccessToken
      }
    }
    else{
      ctx.request.jwtObject = jwtResult
      await next()
    }
  }
})

async function checkToken(token) {
  try {
    const result = await jwt.verifyToken(token)
    if(result.id) return result
  } catch(err) {
    return false
  }
  return false
}


router.get("/", adminController.initModel);

router.use(adminRouter.routes(), adminRouter.allowedMethods())
router.use(userRouter.routes(), userRouter.allowedMethods())

module.exports = router;
