require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_NAME, DATABASE_URL } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: "127.0.0.1",
        dialect: "postgres",
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "postgres",
    },
    production: {
        url: DATABASE_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    },
};