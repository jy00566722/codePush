const express = require('express')
const app = express()
const { exec } = require('child_process');

app.use(require('cors')())
app.use(express.json())


app.get('/codePush',async (req,res)=>{
    console.log(1)
})

app.post('/codePush',async (req,res)=>{
    console.log(req.body)
    exec('dir',(err,stdout,stderr)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(stdout)
        console.log(stderr)
    })



    res.send('ok')

})



app.listen(8008,()=>{
    console.log('http://localhost:8008')
})