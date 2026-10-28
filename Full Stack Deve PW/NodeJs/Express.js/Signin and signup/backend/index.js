require('dotenv').config()
const PORT = process.env.PORT || 5001;
// Importing app.js
const app = require('./app')

//start server
app.listen(PORT, ()=>{
    console.log(`serveris listening at http://localhost:${PORT}`);
    
})
