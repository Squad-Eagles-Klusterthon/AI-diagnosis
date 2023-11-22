const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


const port = process.env.PORT || 5000;
const app = express()

app.use(cors({
    credentials: true,
    origin: "*"
}))

app.use(express.json());

//ROUTES
app.use("/api/chat")
app.use("/api/specialist")

