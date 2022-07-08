const mongoose=require('mongoose');
const PostSchema =new  mongoose.Schema({
    title:{type:String,required: true},
    body:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    user:{type:mongoose.Types.ObjectId,ref:'User'}
});
mongoose.exports=mongoose.model('Post',PostSchema);