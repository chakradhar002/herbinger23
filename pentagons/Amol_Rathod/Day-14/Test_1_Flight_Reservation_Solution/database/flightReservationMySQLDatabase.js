const mysql2 = require("mysql2/promise");

const flightReservationMySqlConnection = async () => {
  const conn = await mysql2.createConnection({
    user: "root",
    password: "Test_1234",
    port: 3306,
    database: "flight_database",
  });

  return conn;
};

module.exports = { flightReservationMySqlConnection };
