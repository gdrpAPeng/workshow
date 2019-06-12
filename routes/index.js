const router = require('koa-router')()

const db = require('../utils/query')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // console.log(ctx.request.query)
  // ctx.body = {
  //   title: 'koa2 json'
  // }
  // ctx.body = ctx.request.query
  console.log('===')
  console.log(db.query(`select * from t_user`))
  ctx.body = db.query
})

router.post('/json', async (ctx, next) => {
  // console.log(ctx)
  ctx.body = ctx.request.body
})

module.exports = router
