const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'She2shoalemeeYi1maefohphaich7Ael'
});

module.exports = pool.promise();