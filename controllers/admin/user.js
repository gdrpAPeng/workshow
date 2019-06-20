const fs = require('fs')
const path = require('path')
const xlsx = require('xlsx')
const uploadPath = path.resolve(__dirname, '../../upload')


class User {
    async uploadExcel(ctx, next) {
        const file = ctx.request.files.file
        const reader = fs.createReadStream(file.path)
        const [ name, ext ] = file.name.split('.')
        const time = new Date().getTime()
        const filePath = `${uploadPath}/${name}_${time}.${ext}`
        console.log(filePath)
        console.log(__dirname)
        const uploadStream = fs.createWriteStream(filePath)
        
        await reader.pipe(uploadStream)
        const stat = fs.statSync(filePath)
        
        // 存在 则 说明文件上传成功
        if(stat.isFile()) {
            const workbook = xlsx.readFile(filePath)
            
            const result = this.excelToJson(workbook)

            // ctx.body = result
        }
    }

    excelToJson(workbook) {
        let result = {}
        let sheetNames = workbook.SheetNames
        SheetNames.forEach(function(sheetName) {
            var worksheet = workbook.Sheets[sheetName]
            result[sheetName] = xlsx.utils.sheet_add_json(worksheet)
        })
        return result
    }
    
}

module.exports = new User()