const dbconnect=require('./mongodb')
const insertt=async()=>{
    const db=await dbconnect();
const result=await db.insertMany(
    [
        {name:'suhail4',adresss:'srinagr',rool:12},
        {name:'suhail5',adresss:'srinagr',rool:23},
        {name:'suhail6',adresss:'srinagr',rool:234}
    ]
)

if ( result.acknowledged){
    console.log("data insert")
}
  
}
insertt()