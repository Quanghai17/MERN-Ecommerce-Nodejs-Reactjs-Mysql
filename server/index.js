const express = require('express');
const cors = require("cors");
require('dotenv').config();
const cookiesParser = require('cookie-parser')
const { connectDB } = require('./config/db');
const router = require("./routes/index")
const path = require('path');

const app = express();

// app.use(cors({
//   origin: '*',
//   credentials: true,
// }));

app.use(express.json());
app.use(cookiesParser())

app.use("/api",router);

app.use('/public', express.static(path.join(__dirname, 'public')));
const PORT = 8080 || process.env.PORT;

connectDB().then(()=>{
  app.listen(PORT,()=>{
      console.log("connnect to DB")
      console.log("Server is running "+PORT)
  })
})