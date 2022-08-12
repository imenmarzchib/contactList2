
const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userSchema = new schema({
  name:String,
  lastname:String,
Email:{type: String, unique:true, required:true},
isAdmin:{type:Boolean,default:false}

  });
  const User = mongoose.model('User', userSchema);
  module.exports=User;