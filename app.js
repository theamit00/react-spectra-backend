const express = require("express");
const app = express();
const PORT = 8080;
const cors = require('cors');

// database Connection
require('./db');

app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use('/api',require('./routes/leadRoute'));

app.listen(PORT, ()=>{
    console.log(`listening to the port: ${PORT}`)
})