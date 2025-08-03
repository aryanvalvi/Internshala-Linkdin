const express = require("express")
const {signUp, login, profile, logout} = require("../controller/Authentication")
const {jwtMiddleware, checkVerify} = require("../controller/jwt")
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controller/Post")
const router = express.Router()

router.get("/check", (req, res) => {
  res.json("running")
})
router.post("/register", signUp)
router.post("/login", login)
router.get("/logout", logout)
router.get("/profile", jwtMiddleware, profile)
router.get("/checkUser", checkVerify)

router.post("/createpost", jwtMiddleware, createPost)
router.put("/createpost/:id", jwtMiddleware, updatePost)
router.delete("/createpost/:id", jwtMiddleware, deletePost)
router.get("/getpost", getPost)

module.exports = router
