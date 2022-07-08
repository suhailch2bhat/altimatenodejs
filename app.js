// const express =require('express');

// const mongoose=require('mongoose');
// const authRoute=require('./route/authRoute')
// const bodyParser = require('body-parser');
// const app =express();
// async function connectDB(){
//     try{
//         await mongoose.connect('mongodb://localhost/ass-5')   
//     }
//     catch(e){
//         console.log(e)

//     }
// }
// async function main(){
//     await connectDB();
//     app.use(express.json());
//     app.use('/api',authRoute);
//     app.listen(3000,()=>console.log('server started on port 3000'))
// }
// main()
// const { response } = require('express')
// const http=require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application\json'})
//     res.write(JSON.stringify({name:"suhail",email:"suhailbhatb@7gamil"}))
//     res.end();
//     // console.log("hii")
// }).listen(3000)
// const http = require('http');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.write(JSON.stringify({name:"suhail",email:"suhailbhatb@7gamil"}));
//   res.end();
// }

// const server = http.createServer(requestListener);
// server.listen(8080,()=>{console.log("server run at 8080")});
// const http=require('http')
// http.createServer((req,res)=>{
//     res.write('<h1>HELLO</h1>')
//     res.write('HELLO')
//     res.end();
//     console.log("hii")
// }).listen(3000,()=>{console.log("server run at 3000")})
// const input=process.argv
// const fs=require('fs')
// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove')
// {
//   fs.unlinkSync(input[3])
// }
// else{
//   console.log('invalid input')
// }
// const fs=require('fs')
// // const { fstat } = require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'files');
// // console.log(dirpath)
// // for(i=0;i<5;i++){
// //   fs.writeFileSync(dirpath+`/hell${i}.txt`,"single page app")
// //   console.log("this a file"+`/hell${i}.txt`)
// // }
// fs.readdir(dirpath,(err,files)=>{
//   files.forEach((item)=>{
//     console.log('file name is',item)
//   })
// })
// const fs=require('fs')
// const path=require('path')
// const dirpath=path.join(__dirname,'curd');
// const filepath=`${dirpath}/apple.txt`;
// // fs.unlinkSync(`${dirpath}/apple.txt`)
// fs.writeFileSync(filepath,'this is a simple txt file')
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//   if(!err)console.log('file name is updated')
// })
// fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
//   if(!err)console.log('file is updated')
// })

// fs.readFile(filepath,'utf8',(err,item)=>{
//   console.log(item)
// })
// let a=20;
// let b=30;
// // setTimeout(()=>b=40,2000) by use Async function data will loss [data loss is solve problem by promise and callback function, async and await]
// console.log(a+b)
// const data=new Promise((resolve,reject)=>{
//   setTimeout(()=>{resolve(b=40)},2000)
// })
// data.then(()=>{console.log(a+b)})

// // this is above is promise concept
// const express =require('express');
// const { join } = require('path');
// const app=express()
// const path=require('path')
// const publicpath=path.join(__dirname,'public')
// const ejs=require('ejs')
// app.set('view engine','ejs')
// // app.use(express.static(publicpath))
// // app.get("/",(req,res)=>{
// //    res.render('index');
// // });
// app.get("/help",(req,res)=>{
//   const user={
//     name:"suahil",
//     email:"suhailbhatb7@gmail",
//     skill:['java','python','html','css']
//   }
//   // res.render('profile',{user});
// });
//    app.get("/about",(req,res)=>{
//     res.sendFile(`${publicpath}/about.html` 
//    )})   
//    app.get("*",(req,res)=>{
//     res.sendFile(`${publicpath}/not.html` 
//    )})

// app.get("/",(req,res)=>{
//   res.send(`  
//   this is home page 
//    <input type="text" placeholder="user name"/>
//    <a href="/about">Go about page</a>`
//    )
// })
// app.get("/about",(req,res)=>{
//   res.send(`  
//   this is about page 
//    <h1>start your career<h1>
//    <a href="/">Go to Home page</a>`
//   )
// })
// const express =require('express');
// const app=express()
// const reqFilter=(req,res,next)=>{
//   if(!req.query.age){
//     res.send(  
//     "please provide your aged"
//      )
//   }  
//    else if(req.query.age<18){
//      res.send("you are underaged")
//    }
//   else{
//     next();
//   }}
//   app.get("/",(req,res)=>{
//     res.send(`  
//     this is home page 
//      <input type="text" placeholder="user name"/>
//      <a href="/about">Go about page</a>`
//      )
//   })
//   // app.use(reqFilter);
//   app.get("/about",reqFilter,(req,res)=>{
//     res.send(`  
//     this is about page 
//     <form>
//      <input type="text" placeholder="user name"/>
//      <a href="/about?age=20">Go about page</a>`
//      )
//   })
//   app.get("/help",(req,res)=>{
//     res.send(`  
//     this is help page 
//      <input type="text" placeholder="user name"/>
//      <a href="/help?age=20">Go help page</a>`
//      )
//   })

// app.listen(3000)
// const express =require('express');
// const reqFilter=require('./middleware')
// const app=express()
// const route=express.Router();
//   app.get("/",(req,res)=>{
//     res.send('home'
//      )
//   })
//   route.use(reqFilter);
//   route.get("/about",(req,res)=>{
//     res.send(`  
//     this is about page 
    
//      <input type="text" placeholder="user name"/>
//      <a href="/about?age=20">Go about page</a>`
//      )
//   })
//   app.get("/help",(req,res)=>{
//     res.send(`  
//     this is help page 
//      <input type="text" placeholder="user name"/>
//      <a href="/help?age=20">Go help page</a>`
//      )
//   })
//   app.use('/',route);

// app.listen(3000)
// const{MongoClient}=require('mongodb');
// const database='ecomm'
// const url ='mongodb://localhost:27017';
// const client=new MongoClient(url)
// async function dbconnection(){
//   let result=await client.connect();
//   let db=result.db(database)
////////////////////////////
//   return db.collection('menu')
  // let response=await collection.find({name:'suhail1'}).toArray();
  // console.log(response)
// }
// dbconnection().then((resp)=>{
//      resp.find().toArray().then((data)=>{
//       console.log(data)
//      })
// })
////////////
// const dbconnection=require('./mongodb.js')
// const main=async()=>{
//   // console.log("myfunction")
//   let data=await dbconnection();
//   data=await data.find().toArray();
//   console.log(data)
// }
// main()
/////////////////////////////////////
// const express=require('express');
// const dbconnection=require('./mongodb.js')
// const mongodb=require('mongodb')
// const app=express()
// app.use(express.json())
// app.get("/",async(req,res)=>{
//   let data=await dbconnection();
//   data=await data.find().toArray();
//   res.send(data)
// })
// app.post("/",async(req,res)=>{
//   let db=await dbconnection();
//  let result=await db.insertOne(req.body)
//     console.log(req.body)
//     res.send(req.body)
// })
// app.put("/",async(req,res)=>{
//   const db=await dbconnection();
// const result=await db.updateOne(
    
//         {"name":"suhail12"},
//         {$set:req.body},)
//         res.send(req.body)
// })
// app.put("/:name",async(req,res)=>{
//   const db=await dbconnection();
// const result=await db.updateOne(
    
//   {name:req.body.name},
//   {$set:req.body},)
//   res.send(req.body)
// })
// app.delete('/:id',async(req,res)=>{
//   console.log(req.params.id)
//   const db=await dbconnection();
//   const result=await db.deleteOne({_id:new mongodb.ObjectId (req.params.id)})
      
//   res.send("done")
// })

// app.listen(3000)

// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/mmy');
// const productSchema=new mongoose.Schema({
//   name:String,
//   adresss:String,
//   rool:Number
// });
// const saveInDB =async()=>{
//   const Data=mongoose.model('data',productSchema);
//   let ata=new Data({
//     name:"suhail",
//     adresss:"awantipora",
//     rool:2345
//   });
//   const result=await ata.save();
//   console.log(result)
// }

// const updateINDB =async()=>{
//   const Data=mongoose.model('data',productSchema);
//   let ata=await Data.updateOne({name:"suhail"},{$set:{rool:7}})
    
//   // const result=await ata.save();
//   console.log(ata)
// }
// // updateINDB()

// // main()
// const updelte =async()=>{
//   const Data=mongoose.model('data',productSchema);
//   let ata=await Data.deleteMany({name:'max1er'})
    
//   // const result=await ata.save();
//   console.log(ata)
// }
// // updelte()
// const finddb =async()=>{
//   const Data=mongoose.model('data',productSchema);
//   let ata=await Data.find()
    
//   // const result=await ata.save();
//   console.log(ata)
// }
// finddb()