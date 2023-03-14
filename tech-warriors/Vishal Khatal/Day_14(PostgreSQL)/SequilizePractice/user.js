const { DataTypes } = require('sequelize');
const  sequelize = require("../Sequelize/database");

const person = sequelize.define('person', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  gender:{
    type:DataTypes.STRING,
    allowNull:false
  },
  DOB:{
    type:DataTypes.DATE,

  },
  email:
  {
    type:DataTypes.STRING,
    allowNull:false
},
  password:{
  type:DataTypes.STRING,
  allowNull:false
  }
}, {
  // type: DataTypes.DATETIME,
  //   defaultValue: DataTypes.NOW,
  // Other model options go here
  // tableName:"person"
});


// `sequelize.define` also returns the model
console.log(person === sequelize.models.person); // true
module.exports = person;