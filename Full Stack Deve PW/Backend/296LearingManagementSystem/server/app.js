import express  from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import morgan from 'morgan';
config();
import userRoutes from './routes/user.routes.js'
import errorMiddleware from './middlewares/error.middleware.js';
import courseRoutes from './routes/course.routes.js'
import paymentRoutes from './routes/payment.routes.js'

const app = express();
app.use(express.urlencoded({extended : true}))

app.use(express.json());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials : true
 }))

app.use(cookieParser());

app.use(morgan('dev'))

app.use('/ping', function(req,res){
    res.send('/pong')
})

// routes for 3 module
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/courses', courseRoutes)
app.use('/api/v1/payments', paymentRoutes)


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use(errorMiddleware);


export default app