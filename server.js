require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();

const NAME = process.env.DB_NAME;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const DIALECT = process.env.DB_DIALECT;

const sequelize = new Sequelize(
    NAME,
    USER,
    PASSWORD, {
        host : HOST,
        dialect : DIALECT
    }
);

const connect = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connected to Mysql database");
    } catch(error) {
        console.log("Failed to connect database", error);
    }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connect();
});



