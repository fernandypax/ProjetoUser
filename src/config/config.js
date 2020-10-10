// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-89b753608d0b58c713f4d19ecb104defc552d408.cceq7uyqmsay.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '5c(!VJ7)-Vu>P>n6K~r%;tz4~iAi>$me'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}