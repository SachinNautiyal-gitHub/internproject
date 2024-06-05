

const express = require('express');
const app = express();
const connectToMongo = require('./db')
const cors = require('cors');



connectToMongo();
app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
   res.send("hello from server")
})

app.use('/profile', require('./routes/profile'))


app.listen(5000, ()=>{
    console.log("server started at port 5000");
})
