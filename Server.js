const express = require ('express');
const app  = express();
const path = require('path');
const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'Public')));
//route for home
app.get('/home',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'Home.html'));});

//route for prodcuts
app.get('/products',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'Products.html'));});

//route for about us
app.get('/about',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'AboutUs.html'));});

//start server
app.listen(PORT,()=>
{console.log(`Server is Running on http://localhost:${PORT}`);});