const path = require('path');
const fs = require('fs');

function resolveSrc (_path) {
    return path.resolve(__dirname, _path);
}

const page_env = process.env.PAGE_ENV;  //  获取命令行自定义参数
const entryPath = resolveSrc('./src/modules/' + page_env + '/main.js');

if(!fs.existsSync(entryPath)) {
    throw SyntaxError('Ther entry path was not found: ' + entryPath);
}

function getPages() {
    let pages = {}
    pages[page_env] = {
        entry: resolveSrc('./src/modules/' + page_env + '/main.js'),
        template: resolveSrc('./src/modules/' + page_env + '/index.html')
    }
    return pages
}

module.exports = {
    outputDir: resolveSrc(`./dist/${page_env}`),
    publicPath: page_env,   
    pages: getPages()
}