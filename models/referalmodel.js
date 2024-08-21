const mongoose = require("mongoose");
const referalSchema=new mongoose.Schema({
      userId:{
          type:String
      },
      referalcode:{
        type:String
      }


},{timestamps:true,versionKey: false })

module.exports =mongoose.model("referal",referalSchema);