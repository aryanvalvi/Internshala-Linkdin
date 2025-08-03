const User = require("../model/User")
const bcrypt = require("bcrypt")
const {generateToken} = require("./jwt")
const TextPost = require("../model/PostModel")
const signUp = async (req, res) => {
  const {name, email, password, bio} = req.body
  if (!name || !email || !password || !bio)
    return res.status(500).json({message: "Please fill the full form"})
  try {
    const userAlreadyThere = await User.findOne({email})
    if (userAlreadyThere)
      return res.status(400).json({message: "user is already exist"})

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User({name, email, password: hashedPassword, bio})
    const payload = {
      id: user.id,
      username: user.name,
    }
    const token = generateToken(payload)

    res.cookie("authToken", token, {
      // httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
    })

    await user.save()
    res.status(200).json({message: "User register Success", token})
  } catch (error) {
    res.status(500).json({message: "error while creating user", error})
  }
}

const login = async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  try {
    if (!user) return res.status(404).json({message: "user not found"})
    const isPasswordMarched = await bcrypt.compare(password, user.password)
    if (!isPasswordMarched)
      return res.status(404).json({message: "Invalid password"})
    const payload = {
      id: user.id,
      username: user.name,
    }
    const token = generateToken(payload)
    res.cookie("authToken", token, {
      // httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      // secure: process.env.NODE_ENV === "production",
    })
    res.status(200).json({message: "Login Successfully", token})
  } catch (error) {
    res.status(500).json({message: "server error"})
  }
}

const profile = async (req, res) => {
  const {userData} = req.user

  try {
    const userId = userData.id
    const user = await User.findById(userId)
    const posts = await TextPost.find({author: userId}).sort({createdAt: -1})
    res.status(200).json({user, posts})
  } catch (error) {
    res.status(500).json({message: "server error", error})
  }
}

const logout = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, // Set to true in production
  })
  res.status(200).json({message: "Logged out successfully"})
}
module.exports = {signUp, login, profile, logout}
