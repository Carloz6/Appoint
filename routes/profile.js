var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Carlos:Newton1@ds151602.mlab.com:51602/users_appoint', ['users']);

//Get All Users
router.get('/profile', function(req, res, next){
   db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    }); 
});

//Get Single User
router.get('/profile/:id', function(req, res, next){
    db.users.find({_id: mongojs.ObjectId(req.params.id)},function(err, user){
         if(err){
             res.send(err);
         }
         res.json(user);
     }); 
 });

 //Save User
module.exports = router;