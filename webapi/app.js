const express = require("express");

const db = require("./database/models");
const app = express();

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const blog = require("./routes/blog.routes");
const blogs = require("./routes/blogs.routes");
const Comment = require("./routes/comment.routes");
const history = require("./routes/history.routes");
const report = require("./routes/report.routes");
const morgan = require("morgan");
const hostname = "127.0.0.1";
const port = 5000;

const cors = require("cors");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);
(async () => {
  await db.sequelize.sync();
})();

app.use("/user", user);
app.use("/auth", auth);
app.use("/blog", blog);
app.use("/blogs", blogs);
app.use("/comment", Comment);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
