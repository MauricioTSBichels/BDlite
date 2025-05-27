const sqlite=require('sqlite3')

const db= new sqlite.Database('./teste.db',(err)=>{
   console.log(err) 
})