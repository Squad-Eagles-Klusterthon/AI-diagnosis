const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const chatRouter = require('./routes/openAIRoute')
const specialistRouter = require('./routes/specialistRoute')


const port = process.env.PORT || 3000;
const app = express()

app.use(cors({
    credentials: true,
    origin: "*"
}))

app.use(express.json());

//ROUTES
app.use("/api", chatRouter);
app.use("/api/specialists", specialistRouter);


app.listen(port, () => {
    try {
    console.log(`server is up on port: ${port}`)
    } catch (error) {
        console.log('Server is down')
    }
});

module.exports = app;