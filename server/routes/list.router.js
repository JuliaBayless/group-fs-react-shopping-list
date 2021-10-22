const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "groceries" ORDER BY "name" DESC;
    `;
  pool
    .query(sqlText)
    .then((result) => {
      console.log('The GET is operational', result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in the GET', error);
      res.sendStatus(500);
    });
});

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
      res.sendStatus(500); // let the client know the request failed
    });
});

// PUT route to either set isPurchased as true on a specific item with an id
// or, if there is a req.body.name, it will update the item
router.put(`/:id`, (req, res) => {
  // build the sql query
  let values, queryText;
  if (req.body.name) {
    // we want to update the whole thing
    queryText = `
      UPDATE "groceries"
      SET "name" = $1, "quantity" = $2, "unit" = $3
      WHERE "id" = $4;
    `;
    values = [req.body.name, req.body.quantity, req.body.unit, req.params.id];
  } else {
    // we only want to set isPurchased to true
    queryText = `
      UPDATE "groceries"
      SET "isPurchased" = true
      WHERE "id" = $1;
    `;
    // sanitize the inputs
    values = [req.params.id];
  }

  pool
    .query(queryText, values)
    .then((response) => {
      res.sendStatus(200); // let the client know the request succeeded
    })
    .catch((err) => {
      console.log(`There was an error communicating with PostgreSQL`, err);
      res.sendStatus(500); // let the client know the request failed
    });
});

//delete all data in table
router.delete('/', (req, res) => {
  const queryText = `
        DELETE from "groceries"
    `;

  pool
    .query(queryText)
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log('ERROR in delete', error);
      res.sendStatus(500);
    });
}); //end router.delete('/') all data in table

//delete specific item
router.delete('/:id', (req, res) => {
  let idToDelete = req.params.id;
  const queryText = `
        DELETE from "groceries"
        WHERE "id" = $1;
    `;
  let value = [idToDelete];
  pool
    .query(queryText, value)
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log('ERROR in delete item', error);
      res.sendStatus(500);
    });
}); //end router.delete('/:id') specific item

// router.post
router.post('/', (req, res) => {
  const newGrocery = req.body;
  console.log('this is req.body', req.body);

  const sqlText = `
    INSERT INTO "groceries" ("name", "quantity", "unit", "isPurchased") 
    VALUES ($1, $2, $3, $4);`;

  let values = [
    newGrocery.name,
    newGrocery.quantity,
    newGrocery.unit,
    newGrocery.isPurchased,
  ];
  pool
    .query(sqlText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database POST`, error);
      res.sendStatus(500);
    });
});

// end router post

module.exports = router;
