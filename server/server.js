const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const chatRouter = require('./routes/openAIRoute')


const port = process.env.PORT || 5000;
const app = express()

app.use(cors({
    credentials: true,
    origin: "*"
}))

app.use(express.json());

//ROUTES
app.use("/api/chats", chatRouter);
// app.use("/api/specialist");


app.listen(port, () => {
    try {
    console.log(`server is up on port: ${port}`)
    } catch (error) {
        console.log('Server is down')
        new Error('Server is down');
    }
});

module.exports = app;