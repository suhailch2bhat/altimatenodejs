module.exports =reqFilter=(req,res,next)=>{
    if(!req.query.age){
      res.send(  
      "please provide your aged"
       )
    }  
     else if(req.query.age<18){
       res.send("you are underaged")
     }
    else{
      next();
    }}