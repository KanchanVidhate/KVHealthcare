import {model,Schema} from 'mongoose';

const doctorSchema = new Schema({
    
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
      },
    speciality:{
        type:String,
        required:true
    },
    opdTimings:{
        type:String,
    }
    },
{
    timestamps:true,
});

  const doctor=model('Doctor',doctorSchema);
  export default doctor;