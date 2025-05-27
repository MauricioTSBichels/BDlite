const express= require('express')
const { conectar }= require('./bd.js')

const db= null

const server=express()

server.use(express.js)

server.get('./usuarios', async (req,res)=>{
 const sql= `SELECT * FROM usuarios`
 const dados= await db.all(sql)
 res.status(200).send(dados)
})

server.get('./usuarios/:id', async (req,res)=>{
const id = req.params.id    
const sql= `SELECT * FROM usuarios WHERE id =?`
const dados= await db.all(sql, [id])
res.status(200).send(dados)
})

server.listen(8000,async()=>{
   console.log("servidor rodando") 
   db=await conectar()
   console.log(db)
})