const express = require("express");
const schema1 = require("./Login_Signup");
const schema2 = require("./Feedback");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(8000, () => {
  console.log("Connected to port 8000");
});

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    schema1.findOne({ email: email }).then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.json("exists");
      } else {
        res.json("notexists");
      }
    });
  } catch (e) {
    res.json("notexists");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  let data;
  bcrypt.hash(password, 10).then((hash) => {
    data = {
      email: email,
      password: hash,
    };
  });

  try {
    const check = await schema1.findOne({ email: email });
    if (check) {
      res.json("exists");
    } else {
      res.json("notexits");
      await schema1.insertMany([data]);
    }
  } catch (e) {
    res.json("notexists");
  }
});

app.post("/feedback", async (req, res) => {
  const { email, feedback } = req.body;
  let data;
  data = {
    email: email,
    feedback: feedback,
  };

  try {
    await schema2.insertMany([data]);
    res.json("sent");
  } catch (e) {
    res.json("notsent");
    console.log(e);
  }
});
