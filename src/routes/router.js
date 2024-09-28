const express = require("express");
const router = express.Router();
const zomatousers=require('../models/users')
router.get("/", async(req, res) => {
  res.send("Welcome to home page");
  const alldata=await zomatousers.find({})
  console.log(alldata)
});
router.route("/aboutus").get((req, res) => {
  res.send("Welcome to aboutus page");
});
router.route("/contact-us").get((req, res) => {
  res.send("Welcome to contact page");
});
router.post("/newrestaurant", (req, res) => {
  //add new data into mongodb
  console.log(req);
  res.send("data added!");
});

router.post("/newmenu", async(req, res) => {
  //add new data into mongodb
  
  const newdata=new zomatousers({
    name:'Rajat',
    username:"Raj12",
    age:26,
    email:"Raj@gmail.com"
  })
  const insertedData=await newdata.save()

  console.log(newdata);
  res.send(insertedData);
});

router.get("/restaurants", (req, res) => {
  res.send("RESTAURANTS!");
});
router.get("/login", (req, res) => {
  res.send("Login!");
});
router.get("/register", (req, res) => {
  res.send("Register!");
});
router.get("/restaurant/:id", (req, res) => {
  res.send("Register!");
});
router.delete("/delete-restaurant", (req, res) => {
  res.send("restaurant deleted");
});
router.delete("/:id/delete-menu", (req, res) => {
  res.send("menu deleted");
});
router.patch("/:id/update-menu", (req, res) => {
  res.send("menu updated");
});
router.patch("/:id/update-restaurant", (req, res) => {
  res.send("restaurant updated");
});
module.exports = router;
