import express from 'express'
const app = express()

// Only routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res)=>{
    res.send('<h1> You have visited Instagram </h1>')
})
export default app;