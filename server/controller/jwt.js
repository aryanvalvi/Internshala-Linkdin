const jwt = require("jsonwebtoken")

const jwtMiddleware = (req, res, next) => {
  const token = req.cookies.authToken
  // const authorization = req.headers.authorization
  // if (!authorization) return res.status(404).json({error: "token not found"})
  // const token = req.headers.authorization.split(" ")[1]

  if (!token) return res.status(401).json({error: "Unauthorized"})

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decode

    next()
  } catch (error) {
    res.status(401).json({message: "invalid token "})
  }
}

const generateToken = userData => {
  return jwt.sign({userData}, process.env.JWT_SECRET)
}

const checkVerify = (req, res) => {
  const token = req.cookies.authToken

  if (!token) return res.json({user: null})
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    res.json({user: decode})
  } catch (error) {
    res.json({user: null})
  }
}

module.exports = {generateToken, jwtMiddleware, checkVerify}
