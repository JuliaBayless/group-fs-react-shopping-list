const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "groceries" ORDER BY "name" DESC;
    `;
    pool.query(sqlText)
    .then((result) =>{
        console.log('The GET is operational', result)
        res.send(result.rows);
    }).catch((error) =>{
        console.log('error in the GET', error)
        res.sendStatus(500)
    })
})




module.exports = router;