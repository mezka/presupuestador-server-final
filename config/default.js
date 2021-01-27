const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    host: "localhost",
    port: process.env.PRESUPUESTADOR_SERVER_PORT,
    public: "../public/",
    paginate: {
        default: 10,
        max: 50
    },
    authentication: {
        entity: "user",
        service: "users",
        secret: "2sTtVmNf0YWJdDrPm78GybDSYNU=",
        authStrategies: [
            "jwt",
            "local"
        ],
        jwtOptions: {
            header: {
                "typ": "access"
            },
            audience: "https://yourdomain.com",
            issuer: "feathers",
            algorithm: "HS256",
            expiresIn: "1d"
        },
        local: {
            usernameField: "email",
            passwordField: "password"
        }
    },
    postgres: `postgres://${process.env.PRESUPUESTADOR_SERVER_DB_USER}:${process.env.PRESUPUESTADOR_SERVER_DB_PASS}@localhost:5432/${process.env.PRESUPUESTADOR_SERVER_DB_NAME}`
}
