

const express = require('express');
const app = express();
const connectToMongo = require('./db')
const cors = require('cors');
const bodyParser = require('body-parser');



connectToMongo();

app.use(cors());
app.options('*', cors());

// app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req,res) =>{
   res.send("hello from server")
})

app.use('/profile', require('./routes/profile'))


app.listen(5000, ()=>{
    console.log("server started at port 5000");
})
