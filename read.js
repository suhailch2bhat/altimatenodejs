const dbconnection=require('./mongodb.js')
const main=async()=>{
  // console.log("myfunction")
  let data=await dbconnection();
  data=await data.find().toArray();
  console.log(data)
}
main()