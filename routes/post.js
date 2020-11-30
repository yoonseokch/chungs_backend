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
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(404).json(err);
    })
})
router.post('/',(req,res)=>{
    var contents=req.body;
    contents.views=0;
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    contents.writtenDate=year + "-" + month + "-" + date;
    db.Board.Post.create(contents)
    .then((data)=>{
        res.status(201).send("글 작성에 성공하였습니다");
    }).catch((err)=>{
        res.status(404).send("글 작성에 실패하였습니다");
    })
})
module.exports = router;