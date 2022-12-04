const eventModel = require('../models/eventModel')
//const slotModel = require('../models/slotModel')
const mongoose = require('mongoose')
const Validator= require("../Validator/validation")



//************************************************createEvent***************************************************** *//
const eventcreation= async function (req, res) {
  try {
   let data= req.body
   const {slug,name, description, start_date, end_date}= data

   if (!Validator.isValidRequestBody(data)) {
       return res.status(400).send({status: false, msg: "please provide some data"})
   }
   if (!slug) {
    return res.status(400).send({status: false, msg: "please provide slug."})
}

 if (!name) {
     return res.status(400).send({status: false, msg: "please provide name."})
 }
 if (!description) {
  return res.status(400).send({status: false, msg: "please provide description."})
}
if (!start_date) {
  return res.status(400).send({status: false, msg: "please provide start_date."})
}
if (!end_date) {
  return res.status(400).send({status: false, msg: "please provide end_date."})
}

let saveData= await eventModel.create(data)
 res.status(201).send({status:true, msg:"successfully created", data:saveData }) 
} catch(err) {
 console.log(err)
 res.status(500).send({status:false, msg: err.message})
}

}


//*************************************************************************getEvent******************************************************//

const getevents =async function(req,res){
  try{
    const eventId = req.body.eventId
    if(eventId){
      const savedata = await eventModel.findById(eventId)
  return res.status(200).send({success:true,data:savedata})
    }
  const savedata = await eventModel.find({published:true})
  return res.status(200).send({data:savedata})
}catch(err){
  res.status(500).send({ status: false, msg: err.message });
}
}



//***********************************************updateevent*********************************************************//

const updateEvent= async function(req,res){
  try{
    const eventId = req.params.eventId
 
  let updatedEventdata = await eventModel.findByIdAndUpdate(eventId,{$set:req.body},{new:true})
    return res.status(200).send({ status: true, messege: "Event updated successfully", data: updatedEventdata })

}

catch (err) {
    return res.status(500).send({ status: false, msg: err.message })
}
}




//*********************************************************DeleteEvent**************************************************//

   const deleteEvent = async function (req, res) {
  try {
    let event = req.params.eventId
    

    const eventdata= await eventModel.deleteOne({_id:event})
    return res.status(200).send({status: true,message: "successfully deleted the student",data:eventdata});
  
} catch (err) {
         return res.status(500).send({ status: false, error: err.message })
    }
  }
   



 module.exports.getevents =getevents
module.exports.eventcreation = eventcreation
module.exports.updateEvent = updateEvent
module.exports.deleteEvent=deleteEvent