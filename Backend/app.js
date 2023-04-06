const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cloudinary = require("cloudinary")
const fileupload = require("express-fileupload")


const errorMiddleWares = require("./middleWares/errors")

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 5000 }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(fileupload());




//import all routes
const products = require("./routes/product")
const authUsers = require("./routes/authUser")
const order = require("./routes/order")
const agentsForm = require("./routes/agentForm")
const nationalKitchen = require("./routes/nationalKitchen")
const mannerPalace = require("./routes/mannerPalace")
const doublePortion = require("./routes/doublePortion")
const numbers = require("./routes/numbers")


app.use("/api/v1", products)

app.use("/api/v1", authUsers)
app.use("/api/v1", order)
app.use("/api/v1", agentsForm)
app.use("/api/v1", nationalKitchen)
app.use("/api/v1", mannerPalace)
app.use("/api/v1", doublePortion)
app.use("/api/v1", numbers)

//middleWare to handle errors
app.use(errorMiddleWares)


module.exports = app


