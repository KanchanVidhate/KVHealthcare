import {Schema,model} from 'mongoose';

const  appointmentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
     docter:{
        type:Schema.Types.ObjectId,
        ref:'Docter',
        required:true,
     },
     appointmentReason:{
        type:String,
        default:'Regular Chekup'
     },

     appointmentDate:{
         type:Date,
         default:Date.now

     },
     appointmentType:{
        type:String,
        enum:["First Visit","Follow Up-1","Follow Up-2","Follow Up-","Routine Checkup"],
        defautl:"First Visit",
     },
     status:{
        type:String,
        enum:["Pending","In Progress","Completed","Cancelled"],
        default:"Pending",
     },
     completedAt:{
        type:Date,
     },
     cancelledAt:{
        type:Date,

     },
     note:{
        type:String,
     }
   },
     {
        timestamps:true,

     }
    
);

const Appointment=model(" appointment", appointmentSchema);
export default Appointment;