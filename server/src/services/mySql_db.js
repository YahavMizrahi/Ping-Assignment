require("dotenv").config();
const mysql = require("mysql2");

// const sql =
// "CREATE TABLE `ping` (`ping` varchar(45) NOT NULL,`host` varchar(45) NOT NULL,PRIMARY KEY (`ping`),UNIQUE KEY `ping_UNIQUE` (`ping`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// pool.execute(sql);

module.exports = pool.promise();
