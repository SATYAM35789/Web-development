// How to handle different URLS.
const http = require('http')

const PORT = 3025
const HOSTNAME = 'localhost'



const server = http.createServer((req, res) => {
   // Home page
   // About Page
   // Contact Page
   // Product Page
   // Rest ... Error
   if (req.url == '/') {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain')
      res.end('Welcome to node js server by Satyam Mishra')
   }
   else if (req.url == '/about') {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain')
      res.end('About Page')
   }
   else if (req.url == '/contact') {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain')
      res.end('Contact page')
   }
   else if (req.url == '/product') {
      const options = {
         hostname: 'fakestoreapi.com',
         path: '/products/1',
         method: 'GET'

      }

      const apiReq = http.request(options, (apiRes) => {
         apiRes.on("data", (data) => {
            res.statusCode = 200
            res.setHeader('Content-Type','application/json')
            res.end(data.toString())
         })
      })
      // Event Listener
      apiReq.on("error", (error) => {
         console.log(error);

      })
      apiReq.end();
  
   }

})

server.listen(PORT, () => {
   console.log(`Server running at ${HOSTNAME}:${PORT} `);

})

