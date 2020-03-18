let Model = require('../utils/schema')
const router = require('express').Router()
// var request = require('request');

router.route('/addBadges').post((req,res) => {
    Model.BadgeModel.create({
        badgeid: req.body.badgeid,
        badgename: req.body.badgename,
        badgeicon: req.body.badgeicon,
        badgedesc: req.body.badgedesc,
      })
      .then(res.json('Badge Created'))
      .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/addUser').post((req,res) => {
    Model.UserModel.create({
        userid: req.body.userid,
        badgesearned: req.body.badgesearned,
        collectionswatched: req.body.collectionswatched,
        rewardpoints: req.body.rewardpoints,
        rank: req.body.rank,
        currcollectionid: req.body.currcollectionid,
        currcollectionlevel: req.body.currcollectionlevel,
      })
      .then(res.json('User Created'))
      .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getUserDetails').get((req,res) => {
    Model.UserModel.findOne({"userid": req.query.name},{"_id":0},function(err,data){
        if(!err)
            res.json(data)
        else
            res.status(400).json('Error: ' + err)    
    })
})
router.route('/getRewardPoints').get((req,res)=>{
    Model.UserModel.find({},{"_id":0}).sort({'rewardpoints':-1}).select({"rewardpoints":1,"userid":1})
     .then(reward => res.json(reward))
     .catch(err => res.status(400).json('Error'+err))
})
router.route('/getBadges').get((req,res) => {
    Model.BadgeModel.find({},{"_id":0}).sort({'badgeid':1})
    .then(badgecollection => res.json(badgecollection))
    .catch(err => res.status(400).json('Error ' + err))
})

// router.route('/getMovies').get((req,res) => {
//     request('http://localhost:8000/vodContentGet/content?catalogueId=20000&count=100&lang=eng&classificationId=node:urn:spvss:ih:kd:term:store:GENRES:ADVENTURE', 
//         function (error, response) {
//             if (!error && response.statusCode == 200) {
//                 res.json(JSON.parse(response.body))
//             }
//         }
//     )
// })

module.exports = router;