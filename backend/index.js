const express = require("express");
const cors = require('cors')
const  mongoose = require("mongoose");

const app = express()
app.use(express.json());
app.use(cors());

require("dotenv").config()
app.use('/chat', require('./routers/chatRoute'))

const port = process.env.PORT || 5000;
const connection_string = process.env.CONNECTION_STRING;


mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db connection established");
  })
  .catch((error) => {
    console.error("Mongodb connection failed:", error.message);
  });


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})