const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const uploadPath = path.resolve(__dirname, "../../upload");

class User {
  async uploadExcel(ctx, next) {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    const [name, ext] = file.name.split(".");
    const time = new Date().getTime();
    const filePath = `${uploadPath}/${name}_${time}.${ext}`;
    console.log(filePath);
    console.log(__dirname);
    const uploadStream = fs.createWriteStream(filePath);

    // await reader.pipe(uploadStream);

    const getRes = await getFile(reader, uploadStream);

    // const stat = fs.statSync(filePath);

    // 存在 则 说明文件上传成功
    if (!getRes) {
      const workbook = xlsx.readFile(filePath);
      const sheetNames = workbook.SheetNames;
      sheetNames.forEach(function(sheetName) {
        var worksheet = workbook.Sheets[sheetName];
        let data = xlsx.utils.sheet_to_json(worksheet)
        ctx.body = data
      });
    }
  }
}

function getFile(reader, uploadStream) {
  return new Promise(function(result) {
    let stream = reader.pipe(uploadStream);
    stream.on("finish", function(err) {
      result(err);
    });
  });
}

module.exports = new User();
