const express = require("express");
const users = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const blogs = require("./routes/blog.routes");
const db = require("./database/models");
const app = express();
const cors = require('cors')

const hostname = '127.0.0.1';
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  await db.sequelize.sync();
})();

app.use("/users", users);
app.use("/auth", auth);
app.use("/blog", blogs);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
