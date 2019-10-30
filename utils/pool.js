const mysql = require('mysql')

const MYSQL_CONFIG = require('../config/mysql')

const pool = mysql.createPool(MYSQL_CONFIG)

// 不用这个
const query = function(sql, value) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if(err) {
                resolve(err)
            } else {
                connection.query(sql, value, (err, rows) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query
}