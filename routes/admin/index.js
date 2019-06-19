const router = require("koa-router")({
  prefix: "/admin"
});

const adminController = require('../../controllers/admin')

router.get("/", adminController.initModel);

module.exports = router;
