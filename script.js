const express= require('express')
const { conectar }= require('./bd.js')

const db= null

const server=express()

server.use(express.js)

server.listen(8000,()=>{
   console.log("servidor rodando") 
   db=conectar()
   console.log(db)
})