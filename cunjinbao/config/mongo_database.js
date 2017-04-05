var mongoose = require('mongoose');
var md5 = require('md5');
var SALT_WORK_FACTOR = 10;
var mongodbURL = 'mongodb://127.0.0.1:27017/goldapp';
var mongodbOptions = { };

mongoose.connect(mongodbURL, mongodbOptions, function (err, db) {
    if (err) { 
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    } else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

var Schema = mongoose.Schema;

// User schema
var User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
    roletype: { type: String, required: true, default: 1},
    created: { type: Date, default: Date.now }
});

var Post = new Schema({
    title: { type: String, required: true },
    tags: [ {type: String} ],
    is_published: { type: Boolean, default: false },
    content: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    read: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
});


// Bcrypt middleware on UserSchema
User.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    user.password = md5(user.password);
    next();
});

//Password verification
User.methods.comparePassword = function(password, cb) {
    if(md5(password)==this.password){
        cb(true);
    }else{
        return cb(false);
    }
};


//Define Models
var userModel = mongoose.model('User', User);


// Export Models
exports.userModel = userModel;
