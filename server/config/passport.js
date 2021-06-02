const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

passport.use(
  new LocalStrategy(
    //User will login with email
    {
      usernameField: "email",
    },
    (username, password, done) => {}
  )
);
