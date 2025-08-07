const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const router = require("./route/route")
const mongoose = require("mongoose")
const cors = require("cors")

const corsOptions = {
  origin: [
    "http://localhost:3001",
    "https://internshala-linkdin-cnl4.vercel.app/",
    "http://144.91.104.106:3001",
    process.env.frontendurl,
  ],
  credentials: true,
}
app.use(cors(corsOptions))
app.use(cookieParser())

app.use(express.json())
app.use("/", router)
require("dotenv").config()
const dataBaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log("database connected"))
    .catch(error => console.log("error while connected to MongoDb ", error))
}
app.listen(5005, () => {
  dataBaseConnection()
  console.log("server is runnig on port 5005")
})
