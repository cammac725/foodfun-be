const knex = require("kenx");

const kenxConfig = require("../knexfile");

const dbEnv = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[dbEnv]);