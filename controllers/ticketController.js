const eventModel = require('../models/eventModel')
const ticketModel = require('../models/ticketModel')
const slotModel = require('../models/slotModel')

const Validator= require("../Validator/validation")

const ticketCreation= async function (req, res) {
  try {
   let eventId= req.params.eventId
   const data = req.body
   const obj = {}
  const eventData = await eventModel.findById(eventId)
 const slotData = await slotModel.findById(data.slotId)
  obj['name'] = eventData.name 
  obj['event'] = eventId
  obj['description'] = slotData.description;
  obj['price'] = slotData.price;
  obj['quantity'] = data.quantity

let saveData= await ticketModel.create(obj)
 res.status(201).send({status:true, msg:"successfully created", data:saveData }) 
} catch(err) {
 console.log(err)
 res.status(500).send({status:false, msg: err.message})
}

}
module.exports. ticketCreation= ticketCreation;
