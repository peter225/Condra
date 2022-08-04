const express = require('express');

const app = express();



const connectDB = require('./Database/connection')

require('dotenv').config()

require('express-async-errors');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    );
    next();
  });

// error handler
const notFoundMiddleware = require('./Auth/middleware/not-found');
const errorHandlerMiddleware = require('./Auth/middleware/error-handler');

//app.use(express.static('./public'))
app.use(express.json())

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//routes




const port = process.env.port || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listen on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()


