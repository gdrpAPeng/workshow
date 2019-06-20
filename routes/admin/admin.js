const router = require("koa-router")();
  
  const adminController = require('../../controllers/admin/admin')

  router.post("/login", adminController.login);

  router.get('/test', async (ctx, next) => {
    ctx.body = ctx.request.jwtObject
  })
  
  module.exports = router;
  