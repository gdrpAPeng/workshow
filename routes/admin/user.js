const router = require("koa-router")({
    prefix: '/user'
});

const userController = require("../../controllers/admin/user");

router.post("/uploadExcel", userController.uploadExcel);

module.exports = router;
