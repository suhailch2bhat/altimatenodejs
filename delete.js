const dbconnect=require('./mongodb')
const deletdata=async()=>{
    const db=await dbconnect();
const result=await db.deleteMany({
    adresss:'srinagr'
}
    
)

if ( result.acknowledged){
    console.log("data delete")
}
  
}
deletdata()