const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello World!");
});

module.exports = router;
