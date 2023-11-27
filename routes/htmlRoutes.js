const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");
const { Breweries } = require("../models");

router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/login", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("login", { error: req.query.error });
});

router.get("/signup", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("signup", { error: req.query.error });
});

router.get("/private", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("protected", { isLoggedIn });
});

router.get("/index", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/list", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("list", { isLoggedIn });
});

module.exports = router;
