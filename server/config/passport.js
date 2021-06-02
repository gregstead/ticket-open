const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

passport.use(
  new LocalStrategy(
    //User will login with email
    {
      usernameField: "email",
    },
    (username, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        // if username is not found in database...
        if (!user) {
          return done(null, false, { message: "Unknown email" });
        }
        // if password is incorrect...
        if (!user.comparePassword(password, (_err, data) => data)) {
          return done(null, false, { message: "Incorrect password" });
        }
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Exporting our configured passport
module.exports = passport;
