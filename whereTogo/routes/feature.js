const express = require('express');
const Feature =require('../models/feature');
const router = express.Router();
const ContentBasedRecommender =  require('content-based-recommender')
const Result = require('../models/result');

router.post('/recommend', async(req, res, next) => {
    let userFeature = req.body.user_feature;
    console.log(JSON.stringify(userFeature));
    let str1 = userFeature.substr(0,2);
    let str2 = userFeature.substr(2,2);
    let str3 = userFeature.substr(4,2);
    let featureStr = str1 + ' ' + str2 + ' ' + str3;
    console.log(featureStr);
    const recommender = new ContentBasedRecommender({
        minScore: 0,
        maxSimilarDocuments: 100
    });
    const documents = [
        { id:'공원', content:"01 10 01"},
        { id:'영화관', content:"10 01 10"},
        { id:'전시회', content:"10 01 11"},
        { id:'볼링', content:"11 11 10"},
        { id:'카페', content:"11 01 01"},
        { id:'교회', content:"10 00 10"},
        { id:'공방', content:"10 01 11"},
        { id:'pc방', content:"11 01 00"},
        { id:'야구장', content:"01 11 11"},
        { id:'헌혈', content:"10 00 00"},
        { id:'만화방', content:"10 01 10"},
        { id:'1000012', content:JSON.stringify(featureStr)}
    ];
    recommender.train(documents);

    const similarDocuments = recommender.getSimilarDocuments('1000012', 0,4);
    console.log(similarDocuments);
    let feature1 = similarDocuments[0].id;
    let feature2 = similarDocuments[1].id;
    let feature3 = similarDocuments[2].id;
    let feature4 = similarDocuments[3].id;

    let result = await Result.create({
        feature_one : feature1,
        feature_two : feature2,
        feature_three: feature3,
        feature_four: feature4
    });
    return res.json(result);
});

module.exports = router;
