const express = require('express');

const app = express();



const connectDB = require('./Database/connection')

require('dotenv').config()

require('express-async-errors');

const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');


const authorizeUser = require('./middleware/authentication')
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
//router
const authRouter = require('./Auth/routes/auth')
const postRouter = require('./Posts/routes/post')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//app.use(express.static('./public'))
//app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts',authorizeUser, postRouter)

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


