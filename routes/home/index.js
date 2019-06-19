const router = require("koa-router")({
  prefix: "/home"
});

router.get("/", async (ctx, next) => {
  console.log("home");
});

module.exports = router;
