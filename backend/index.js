import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app=express();
// const cors=require('cors');
app.use(express.json());
app.use(cors());

app.use('/books', bookRoute);


app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send('welcome to my app');

});
mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT, ()=>{
        console.log(`App is listening at port: ${PORT}`)
    
    })

})
.catch((error)=>{
    console.log(error);
});

