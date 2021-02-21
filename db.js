
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "212.1.212.9",
      user: "wolftechcd_semia",
      password: "lusevakio@2021",
      database: "wolftechcd_mon_billet",
    },
  });
module.exports = knex