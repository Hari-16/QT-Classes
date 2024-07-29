const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    console.log('i am from get web api');
    res.send('i am from get web api');
})
app.get('/getAllProducts',(req,res)=>{
    console.log(' i am from getAllProducts');
    res.send(' i am from getAllProducts');
})
app.post('/saveProduct',(req,res)=>{
    console.log(' I am from Save Product');
    res.send(' I am from Save Product');
})
app.put('/editProduct',(req,res)=>{
    console.log('I am From Edit Product');
    res.send('I am From Edit Product');

})
app.patch('/editPrice',(req,res)=>{
    console.log('I am From EditPrice');
    res.send('I am From EditPrice');
})
app.delete('/deleteProduct',(req,res)=>{
    console.log('i am from delete product');
    res.send('i am from delete product');
})

app.listen(1234,()=>{
    console.log('my server started on port no 1234');
})

