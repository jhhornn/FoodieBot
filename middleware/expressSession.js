const session = require("express-session")
const store = require("../config/database")

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 60 * 24 * 7 * 365 },
  store: store
})

module.exports = sessionMiddleware
