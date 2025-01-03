import mongoose, { Schema } from "mongoose";

const Otpschema = new Schema({
    phonenumber: {
        type : Number,
        require: true
    },

})

const Otp = mongoose.model('Otp' , Otpschema)
export default Otp