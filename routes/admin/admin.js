const router = require("koa-router")();
  
  const adminController = require('../../controllers/admin/admin')

  router.post("/login", adminController.login);

  router.get('/test', async (ctx, next) => {
    ctx.body = ctx.request.jwtObject
  })

  // 管理员列表
  router.get('/getAdminList', adminController.getAdminList)
  // 修改密码
  // 添加
  router.post('/addOneAdmin', adminController.addOneAdmin)
  // 删除
  
  module.exports = router;
  