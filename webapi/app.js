const express = require("express");


const blogs = require("./routes/blog.routes");
const db = require("./database/models");
const app = express();

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const blogs = require("./routes/blog.routes");
const Comment = require("./routes/comment.routes");
const history = require("./routes/history.routes");
const report = require("./routes/report.routes");
const hostname = '127.0.0.1';
const port = 3000;

const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
(async () => {
  await db.sequelize.sync();
})();

app.use("/users", users);
app.use("/auth", auth);
app.use("/blog", blogs);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
