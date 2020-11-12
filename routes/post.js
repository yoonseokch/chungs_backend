const express = require('express');
const db = require('../models/index.js');
const router = express.Router();
router.get('/',(req,res)=>{
    db.Board.Post.findAll({
        include : [
            {
                model : db.Board.Category
            }
        ]
    })
    .then((data)=>{
        res.json(data);
    })
})
module.exports = router;