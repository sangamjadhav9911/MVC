let express = require('express')
let router = express.Router()
let Users = require('../model/user')
let bcrypt=require('bcrypt')

//All Users
router.get("/", async (req, res) => {
  let data = await Users.find();
  res.json(data);
});


// Add Users
router.post("/", async (req, res) => {
  // let user = req.body
  let { name, email, password } = req.body;

  let finduser = await Users.findOne({ email });
  console.log(finduser);
  if (!finduser) {
    let password2 = await bcrypt.hash(password, 10);
    // console.log(password)
    password = password2;
    await Users.insertOne({ name, email, password });
    res.json({ success: true, message: "Data saved" });
  } else {
    return res.json({ message: "Email Already Exits", success: false });
  }
});

//login
router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let finduser = await Users.findOne({ email });
  console.log(finduser);
  if (finduser) {
    let result = await bcrypt.compare(password, finduser.password); //it will return boolean
    if (result) {
      return res.json({ message: "Login successful", success: true });
    } else {
      return res.json({ message: "Invalid Password", success: false });
    }
  } else {
    return res.json({ message: "Invalid Username", success: false });
  }
});


module.exports = router