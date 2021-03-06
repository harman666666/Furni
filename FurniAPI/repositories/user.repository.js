"use strict";
var encrypt_data_1 = require("../Infrastructure/encrypt.data");
var mongoose = require('mongoose');
var User = require('../models/user.database.model');
//mongoose.connect('mongodb://harman666666:123456@ds061454.mlab.com:61454/borrowit'); 
/*
set( ) 	Write or replace data to a defined path, like messages/users/<username>
update( ) 	Update some of the keys for a defined path without replacing all of the data
push( ) 	Add to a list of data in the database. Every time you call push()
            your database generates a unique ID, like messages/users/<unique-user-id>/<username>
transaction( ) 	Use our transactions feature when working with complex data that
                could be corrupted by concurrent updates
*/
var UserRepository = (function () {
    function UserRepository() {
        //var mongoose = require('mongoose').;
        // this.mongoose = new Mongoose.Mongoose(); 
        this.dataEncrypt = new encrypt_data_1.DataEncrypt();
    }
    UserRepository.prototype.createNewUser = function (user) {
        //We will obtain the form data from the request argument that is passed into our function
        //req.body => brings the form data along with it
        user.password = this.dataEncrypt.encrypt(user.password);
        var entry = new User({
            username: user.username,
            password: user.password,
            firstname: user.firstname,
            lastname: user.lastname,
            middlename: user.middlename,
            email: user.email,
            phone: user.phone,
            accountNumber: user.accountNumber
        });
        return entry.save();
    };
    /*
    I returned mongoose docs as json in this way:
    
    UserModel.find({}, function (err, users) {
        return res.end(JSON.stringify(users));
    }
    However, user.__proto__ was also returned. How can I return without it? I tried this but not worked:
    
    UserModel.find({}, function (err, users) {
        return res.end(users.toJSON());    // has no method 'toJSON'
    }
    
    
    You may also try mongoosejs's lean() :
    
    UserModel.find().lean().exec(function (err, users) {
        return res.end(JSON.stringify(users));
    }
    
    
    
    */
    UserRepository.prototype.getAllUsers = function () {
        var query = User.find();
        return query.sort({ username: 'desc' }) //ask it to be sorted on date in descending order
            .limit(12) //Specifies maximum number of results query will return and cannot be used with distinct 
            .exec();
    };
    UserRepository.prototype.getUserByUsername = function (username) {
        function decrypt(password) { return this.dataEncrypt.decrypt(password); }
        var query = User.findOne({ "username": username });
        // var fook = this;
        return query.exec(); /*.then(function(item){
         
            console.log(item.password);
            
            console.log(fook);
            fook.password = item.password;
            console.log(fook.password);
            console.log(fook.dataEncrypt.decrypt(fook.password));
            console.log("end");
        });*/
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
