const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/products")
const cartRoute = require("./routes/carts")
const orderRoute = require("./routes/orders")
const stripeRoot = require("./routes/stripe")

const cors = require("cors")

dotenv.config();

const moongoose = require("mongoose");
moongoose.connect(
      process.env.MONGO_URL
    ).then(()=>console.log("DB Connection Successfull!")).catch((err)=>console.log(err));

app.use(express.json());

app.use(cors());

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoot);



app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running !")
})

