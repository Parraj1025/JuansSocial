require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'dpg-cqsu7raj1k6c73fo8b5g-a.ohio-postgres.render.com',
      dialect: 'postgresql',
      dialectOptions: {
        decimalNumbers: true,
        ssl: true
      },
    });

module.exports = sequelize;
