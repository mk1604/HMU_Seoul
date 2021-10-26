const express = require('express');
const Result =require('../models/result');
const router = express.Router();

router.get('/', async(req, res, next) => {
        const feature_result =  await Result.findAll({
            order: [['id', 'DESC']],
            limit:1,
            raw:true
        });
        console.log(feature_result[0]);
        res.send(feature_result[0]);
});

module.exports = router;
