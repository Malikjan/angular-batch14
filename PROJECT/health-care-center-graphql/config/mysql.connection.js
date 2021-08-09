import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    database: 'healthcarecenter',
    user: 'root',
    password: 'root'
})

connection.connect()
