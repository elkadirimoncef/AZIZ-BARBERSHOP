const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "mmpp1234",
    host: "localhost",
    port: 5432,
    database: "bk_login_system",
});

module.exports = pool;