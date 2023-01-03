const express = require("express");
const db = require("./database/models");
const app = express();

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const blog = require("./routes/blog.routes");
const blogs = require("./routes/blogs.routes");
const Comment = require("./routes/comment.routes");
const history = require("./routes/history.routes");
const Interactive = require("./routes/Interactive.routes");
const report = require("./routes/report.routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const morgan = require("morgan");
// const hostname = "127.0.0.1";
const port = 5000;

const cors = require("cors");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*"
}));
dotenv.config();
(async () => {
  await db.sequelize.sync();
})();
const connected = () => {
  mongoose
    .connect(process.env.MONGO || 3005)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
app.use("/user", user);
app.use("/auth", auth);
app.use("/blog", blog);
app.use("/blogs", blogs);
app.use("/history", history);
app.use("/report", report);
app.use("/comment", Comment);
app.use("/Interactive", Interactive);

app.listen(port,()=>{
  connected();
});
