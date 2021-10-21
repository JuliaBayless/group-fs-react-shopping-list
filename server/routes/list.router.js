const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


router.post('/', (req, res) => {
    const newGrocery = req.body;
    console.log('this is req.body', req.body);
    
    const sqlText = `
    INSERT INTO "groceries" ("name", "quantity", "unit", "isPurchased") 
    VALUES ($1, $2, $3, $4);`;

    let values = [newGrocery.name, newGrocery.quantity, newGrocery.unit, newGrocery.isPurchased]
    pool.query(sqlText, values)
    .then((result) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log(`Error making database POST`, error);
        res.sendStatus(500);
    })
})


module.exports = router;