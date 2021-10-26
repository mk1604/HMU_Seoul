/*
const express = require('express');
const Category=require('../models/category');
const Feature =require('../models/feature');
const router = express.Router();


router.post('/feature', async(req, res, next) => {
    const {category_name} = req.body;
    console.log(category_name);

    try{
        const category= await Category.findOne({where:{category_name}});
        const CategoryId = category.category_id;
        console.log(CategoryId);
        if(CategoryId) {
            const feature = await Feature.findOne({where:{CategoryId}});
            return res.json(feature);
        }
    }catch (error) {
        console.error(error);
    }
});

module.exports = router;
*/
