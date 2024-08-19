import {model,Schema} from 'mongoose';

const userSchema = new Schema({
  name:{
        type:String,
        required:true,
      },
  email:{
        type:String,
      },
  address:{
        type:String,
      },
  password:{
    type:Number,
    requried:true,
   },
 age:{
    type:Number,
    requried:true
    } ,
 gender:{
    type:String,
    requried:true
    },
    role:{
        type:String,
        enum:['admin','doctor','patient'],
        default:'patient'
    },
  },

  {
    timestamps:true,

 });


  export default model('User',userSchema);  

    
