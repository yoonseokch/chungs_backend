const express = require('express');
const db = require('../models/index.js');
const router = express.Router();
router.get('/',(req,res)=>{
    db.Board.Category.findAll()
    .then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(404).send("카테고리를 가져오는데 실패하였습니다");
    })
})
router.post('/',(req,res)=>{
    db.Board.Category.create(req.body)
    .then((data)=>{
        res.status(201).send("카테고리가 생성되었습니다");        
    }).catch((err)=>{
        res.status(404).send("카테고리 생성에 실패하였습니다");
    })
})
module.exports = router;