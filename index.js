const express = require('express');
const app = express();
app.use(express.json())
require("./database/databse").connect()
const User = require("./models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const auth = require('./middleware/auth');

console.log(process.env) 
app.use(cookieParser())


app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    if (!(firstName && lastName && email && password)) {
      res.status(400).send("all fields are compulsory")
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(400).send("user already exists")
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword
    })

   const token =  jwt.sign(
      {id: user._id, email},
      "secret_key",
      { 
        expiresIn: "2h"
      }
    )

    user.token = token
    user.password = undefined

    res.status(201).json({user})
  } catch (err) {
    console.log(err)
  }
})
 
app.post("/login" , async(req,res)=>{
  try {
    const {email,password} = req.body
    if(!(email && password)) {
      res.status(400).send("email or password missing")
    }

   const user =  await User.findOne({email})

   if(user && (await bcrypt.compare(password, user.password))){
    const token =  jwt.sign(
    {id: user._id},
    "secret_key",
      { 
        expiresIn: "2h"
      })
      user.token = token
      user.password = undefined

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly : true
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
      })

    }
  } catch (error) {
    console.log(error)
  }
})



