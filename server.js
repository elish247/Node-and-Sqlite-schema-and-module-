const express= require("express");
const db=require("./models/index");
const cors = require("cors");
const bodyParser = require("body-parser");
db.sequelize.sync();
const app= express();
const port=1000;
//middel wares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


// testting

app.get("/",(req,res)=>{
    res.send("perfect")
});


app.listen(port,function(){
    console.log(`server running on ${port}` );  
  }) 


  //router

  const router=require("./routes/userRoutes.js")
  app.use("/api",router)