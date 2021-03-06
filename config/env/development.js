module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'Application Id',
        clientSecret: 'Application Secret',
        callbackURL: 'http://sunfire:3000/oauth/facebook/callback'

    },
    twitter: {
               clientID: 'Application Id',
               clientSecret: 'Application Secret',
               callbackURL: 'http://sunfire:3000/oauth/twitter/callback'

    },
    google: {
               clientID: 'Application Id',
               clientSecret: 'Application Secret',
               callbackURL: 'http://sunfire:3000/oauth/google/callback'

    }
};
