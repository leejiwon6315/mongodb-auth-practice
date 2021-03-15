const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const config = require("./config/key");
const { auth } = require("./middleware/auth");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/api/users/register/", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/login/", (req, res) => {
  User.findOne({ userId: req.body.userId }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "해당 아이디의 사용자가 없습니다.",
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth/", auth, (req, res) => {
  //미들웨어를 거친 후 실행됨
  res.status(200).json({
    //유저 정보를 json 형태로 전달
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    userId: req.user.userId,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout/", auth, (res, req) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
