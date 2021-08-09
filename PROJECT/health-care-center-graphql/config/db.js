import { connection } from '../config/mysql.connection.js'

export const utillQuery = (req, sql, args) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, args, (err, result) => {

            if (err) return reject(err)
            resolve(result)
        })
    })
}
