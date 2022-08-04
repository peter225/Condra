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

//router
const authRouter = require('./Auth/routes/auth')
const postRouter = require('./Posts/routes/post')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

//routes




const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listen on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()


