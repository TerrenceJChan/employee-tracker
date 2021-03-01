const Database = require('../libs/Database')

const mysql = require('mysql2');
require('dotenv').config();

const db = new Database({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

module.exports = db;