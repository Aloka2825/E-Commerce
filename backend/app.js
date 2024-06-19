const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
//const fileUpload = require("express-fileupload")
const errorHandler = require("./middlewere/error");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(fileUpload());

//route import
const productRoute = require("./routes/projuctRoutes");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoutes");
const cartRoute = require("./routes/cartRoutes");
const paymentRoute = require("./routes/paymentRoutes");


app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", cartRoute);
app.use("/api/v1", paymentRoute);


//middleware for error

app.use(errorHandler);


module.exports = app;