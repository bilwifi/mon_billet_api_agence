const express = require("express");
const db = require("./db");
const server = express();

server.get("/api/reservations/:id", async (req, res) => {
  db("reservation")
    .join("bus", "bus.idbus", "reservation.idbus")
    .where({idreservation : req.params.id})
    .select("*")
    .then(async (result) => {
      const reservation = result[0]
      if (!reservation) {
          res.status(404)
          return res.json({message : "Billet Invalide"});
      }
    //   const etineraire = await result.length ? await db("itineraire").where({iditineraire : reservation.iditineraire}) : null
    //   reservation['etineraire'] = etineraire ? etineraire[0] : null
      return res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      return res.json({ error: "une erreur est survenue" });
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`localhost:${PORT}`));
