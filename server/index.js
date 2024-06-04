

const express = require('express');
const app = express();
const connectToMongo = require('./db')



connectToMongo();
app.use(express.json());


app.use('/api/profile', require('./routes/profile'))


app.listen(5000, ()=>{
    console.log("server started at port 5000");
})
