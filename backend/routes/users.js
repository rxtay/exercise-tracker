const router = require('express').Router();
let User = require('../models/user-model');

/*
@ Incoming HTTP GET request
@ GET Method for root url
*/
router.route('/').get((req, res) => {
    //find() is a mongoose method
    //Using user model to interact with MongoDB
    User.find()
        .then(users => res.json(users)) //Return all the users
        .catch(err => res.status(400).json('Error:' + err)); //Return the error
});

/*
@ POST Method to Add user to MongoDB
*/
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Err: ' + err));
});

module.exports = router;