const catchError = async (ctx, next) => {
    try {
        await next()
    } catch(e) {
        // logs

        ctx.response.status = 403
        return ctx.body = {
            code: 1,
            message: 'Error'
        }
    }
}

module.exports = catchError