const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// PUT route to reset all the isPurchased properties to false
router.put(`/`, (req, res) => {
  // build the sql query
  let queryText = `
    UPDATE "groceries"
    SET "isPurchased" = false;
  `;

  // run the query
  pool
    .query(queryText)
    .then((response) => {
      res.sendStatus(200); // let the client know the request succeeded
    })
    .catch((err) => {
      console.log(`There was an error communicating with PostgreSQL`, err);
      res.sendStatus(500);
    });
});

// PUT route to set isPurchased as true on a specific item with an id
router.put(`/:id`, (req, res) => {
  // build the sql query
  let queryText = `
    UPDATE "groceries"
    SET "isPurchased" = true
    WHERE "id" = $1;
  `;

  // sanitize the inputs
  let values = [req.params.id];

  pool
    .query(queryText, values)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`There was an error communicating with PostgreSQL`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
