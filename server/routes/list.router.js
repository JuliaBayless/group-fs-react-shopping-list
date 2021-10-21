const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...



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
})//end router.delete('/')


router.delete('/:id')

module.exports = router;