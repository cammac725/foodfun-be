// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  testing: {
      client: "pg",
      connection: {
        filename: "./data/test.db3"
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
  },

  // production: {
  //   client: "pg",
  //   connection: process.env.DATABASE_URL, 
  //   // || {
  //   //   database: "process.env.DB",
  //   //   user: "username",
  //   //   password: "password"
  //   // },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: "./data/migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   }
  // }
};
