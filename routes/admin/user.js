const router = require("koa-router")({
    prefix: '/user'
});

const userController = require("../../controllers/admin/user");

// 上传 excel 导入数据库
router.post("/uploadExcel", userController.uploadExcel);

// 用户列表
// 添加用户
// 删除用户
// 获取用户信息



module.exports = router;
