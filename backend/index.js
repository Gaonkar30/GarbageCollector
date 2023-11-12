const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth');
const Request = require('./models/request');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


const uri = "mongodb+srv://garbage:garbage@gms.qxawdmv.mongodb.net/?retryWrites=true&w=majority";


app.use('/auth', authRouter);

mongoose.connect(uri)
.then(()=> console.log('akash lowda'));



app.listen(PORT, ()=>{
    console.log("server running on", PORT);
});


