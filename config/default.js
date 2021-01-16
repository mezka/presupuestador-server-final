const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    host: "localhost",
    port: process.env.PORT,
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
    postgres: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/${process.env.DB_NAME}`
}
