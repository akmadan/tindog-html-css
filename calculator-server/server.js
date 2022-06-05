const express = require('express')
const bodyParser = require('body-parser') //can access body parameters

const app = express(); 

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>{ 
res.sendFile(__dirname+"/index.html"); 
})


//POST REQUEST
app.post('/', (req, res)=>{ 
    var num1 = req.body.num1; 
    var num2 = req.body.num2; 
    var result = Number(num1)+Number(num2); 
    res.send('The output is ' + result)
    // console.log(req.body);
})

app.listen(3000, ()=>{
    console.log('Server Started')
})