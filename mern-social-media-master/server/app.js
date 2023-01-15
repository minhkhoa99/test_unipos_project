const express = require("express");
const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const blogs = require("./routes/blog.routes");
const Comment = require("./routes/comment.routes");
const history = require("./routes/history.routes");
const report = require("./routes/report.routes");
const db = require("./database/models");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  await db.sequelize.sync();
})();

app.use("/user", user);
app.use("/auth", auth);
app.use("/blog", blogs);
app.use("/comment", Comment);
app.use("/history", history);
app.use("/report", report);

app.listen(PORT);
