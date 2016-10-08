var User = require('mongoose').model('User');
exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};
exports.read = function(req, res) {
    res.json(req.user);
};
exports.test = function(req, res) {
    User.testStatic();
  User.testStatic(function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};
exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};
//Not working correctly...
exports.userByUsername = function(req, res, next, loginid) {
    User.findOneByUsername({
        username: loginid
    }, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            console.log('The USER: ');
            console.log(user);
            next();
        }
    });
    console.log(loginid);
};
exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};
exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    })
};
