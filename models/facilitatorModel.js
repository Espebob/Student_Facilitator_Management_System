import mongoose from "mongoose";    

const facilitatorSchema = new mongoose.Schema({

    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: String, required: true, unique:true},
    nationalId: {type: String, required: true, unique: true},
    course:[{ type: 
        String, required: true}] ,
   role: {type: String, required: true, enum: {
           values: ['Techinical Facilitator', 'Assistant Techinical Facilitator '],
           message: 'role must be either Techinical Facilitator or Assistant Techinical Facilitator'
       }
   }
},{timestamp: true})

const facilitatorModel = mongoose.model('Facilitator', facilitatorSchema)

export default facilitatorModel