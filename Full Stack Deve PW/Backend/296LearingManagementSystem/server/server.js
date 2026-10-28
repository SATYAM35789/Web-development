import app  from './app.js';
import connectionToDB from './config/dbconnection.js';
import cloudinary from 'cloudinary'
import Razorpay from 'razorpay'

const PORT = process.env.PORT || 5000;

// Cloudinary Configuration  
cloudinary.v2.config({ 
    // Ye sari chizre humko milengi cloudianry par account create karne ke baad. 
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

export const razorpay = new Razorpay({
    key_id : process.env.RAZOPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_SECRET
})

app.listen(PORT, async()=>{
    await connectionToDB();
    console.log(`App is running at http:localhost:${PORT}`);
    
})