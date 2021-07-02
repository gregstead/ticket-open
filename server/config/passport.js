const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy(
    //User will login with email
    {
      usernameField: "email",
    },
    (email, password, done) => {
      
      db.user.findOne({ where: { email } }).then((dbUser) => {
        if (!dbUser || !dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect email or password",
          });
        }

        return done(null, dbUser);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
