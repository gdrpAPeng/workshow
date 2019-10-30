class Base {
    formatResult(code = 0, message = '', data = null) {
        return {
            code,
            message,
            data
        }
    }
}

module.exports = new Base()