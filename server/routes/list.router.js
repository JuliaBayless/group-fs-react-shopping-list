const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


//delete all data in table
router.delete('/', (req, res) => {
    const queryText = `
        DELETE from "groceries"
    `

    pool.query(queryText)
        .then(result => {
            res.sendStatus(204)
        })
        .catch((error => {
            console.log('ERROR in delete', error);
            res.sendStatus(500);
        }))
})//end router.delete('/') all data in table


//delete specific item
router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    const queryText = `
        DELETE from "groceries"
        WHERE "id" = $1;
    `
    let value = [idToDelete]
    pool.query(queryText, value)
        .then(result => {
            res.sendStatus(204)
        })
        .catch((error => {
            console.log('ERROR in delete item', error);
            res.sendStatus(500);
        }))
})//end router.delete('/:id') specific item

module.exports = router;