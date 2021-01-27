module.exports = {
  development: {
    username: process.env.PRESUPUESTADOR_SERVER_DB_USER,
    password: process.env.PRESUPUESTADOR_SERVER_DB_PASS,
    database: process.env.PRESUPUESTADOR_SERVER_DB_NAME,
    host: "localhost",
    dialect: "postgres"
  },
  test: {
    username: process.env.PRESUPUESTADOR_SERVER_DB_USER,
    password: process.env.PRESUPUESTADOR_SERVER_DB_PASS,
    database: process.env.PRESUPUESTADOR_SERVER_DB_NAME,
    host: "localhost",
    dialect: "postgres"
  },
  production: {
    username: process.env.PRESUPUESTADOR_SERVER_DB_USER,
    password: process.env.PRESUPUESTADOR_SERVER_DB_PASS,
    database: process.env.PRESUPUESTADOR_SERVER_DB_NAME,
    host: "localhost",
    dialect: "postgres"
  }
}
