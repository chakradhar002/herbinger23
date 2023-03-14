const {Sequelize} = require('sequelize');
const seq = new Sequelize("mycompany","root","Test_1234",{
    host:"localhost",
    dialect:"mysql"
});
try {
     seq.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  seq.sync({});
  module.exports = seq;