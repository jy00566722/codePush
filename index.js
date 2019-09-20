const express = require('express')
const app = express()
const { exec } = require('child_process');

app.use(require('cors')())
app.use(express.json())


app.get('/codePush',async (req,res)=>{
    console.log(1)
}) 

app.post('/codePush',async (req,res)=>{
    console.log('收到PDD项目git codePush消息')
    console.log(req.body.before)
    exec('cd /home/www/pdd && git pull',(err,stdout,stderr)=>{
        if(err){
            console.log(err)
            return
        }else{
            exec('pm2 restart 4',(err,stdout,stderr)=>{
                if(err){
                    console.log(err)
                }
            })
        }
       
    })



    res.send('ok')

})



app.listen(8008,()=>{
    console.log('http://localhost:8008')
})