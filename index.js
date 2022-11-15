const express=require("express");
const mongoose = require("mongoose");
const PORT=8000;
const app=express();
const router=require("./router");
const dotenv=require("dotenv");
const cors = require("cors");
dotenv.config();
// mongoose
//   .connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// app.listen(PORT,async()=>{
//     console.log(`server up on PORT ${PORT}`);
// });

mongoose
    .connect(
      "mongodb+srv://*****:*****@cluster0.1srlk5d.mongodb.net/?retryWrites=true&w=majority"
      )
    
    .then(()=>
        app.listen(8000,()=>console.log("connected and listening on port number 8000"))
        )
    .catch((err)=>console.log(err));

    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(router);


