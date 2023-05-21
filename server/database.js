const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "passw1234",
    host: "localhost",
    port: 5432,
    database: "azizdatabase",
});

module.exports = pool;
