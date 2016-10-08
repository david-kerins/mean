var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    },
    website: {
        type: String,
        get: function(url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }
                return url;
            }
        }
    }
});
UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
    var splitName = fullName.split(' '); this.firstName = splitName[0] || ''; this.lastName = splitName[1] || '';
});
UserSchema.set('toJSON', { getters: true, virtuals: true  });


UserSchema.statics.findOneByUsername = function (loginid, callback) {
    this.findOne({ username: new RegExp(loginid, 'i') }, callback);
};

UserSchema.statics.testStatic = function() { return 'Hello world';  };

mongoose.model('User', UserSchema);
