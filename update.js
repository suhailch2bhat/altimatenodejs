const dbconnect=require('./mongodb')
const update=async()=>{
    const db=await dbconnect();
const result=await db.updateOne(
    
        {name:'suhail4'},
        {$set:{name:'su'}},
        
    
)

if ( result.acknowledged){
    console.log("data update")
}
  
}
update()