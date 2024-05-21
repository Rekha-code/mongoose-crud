const express = require('express')
const conn = require('./config')
const user = require('./user')

const app = express()
app.use(express.json())



app.post('/',async(req,resp)=>{
  let data = new user(req.body)
  let result = await data.save()
  resp.send(result)
})

app.get('/emplist',async(req,res)=>{
  let result = await user.find()
  res.send(result)
})

app.put('/update/:_id',async(req,res)=>{
  let result = await user.updateOne(req.params,{$set:req.body})
})

app.delete('/delete/:_id',async(req,res)=>{
  let result= await user.deleteOne(req.params)
  res.send(result)
})

app.get('/search/:key',async(req,res)=>{
  let result = await user.find({
    $or:[
      {
        name:{$regex:req.params.key}
      },
      {
        gmail:{$regex:req.params.key}
      },
      {
        city:{$regex:req.params.key}
      }
  
    ]
  })
  
})
app.listen(4000)