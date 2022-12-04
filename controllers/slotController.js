const slotModel = require("../models/slotModel");
const Validator= require("../validator/validation")



//***************************************************createSlot*************************************************** //

const createSlot = async function (req, res) {

    try {

        let data = req.body
        const {event,date,description,price,total_quantity,available_quantity} = data

        if (!Validator.isValidRequestBody(data)) {
            return res.status(400).send({ status: false, msg: "please provide some data" })
        }

        if (!event) {
            return res.status(400).send({ status: false, msg: "please provide event field." })
        }

        if (!date) {
            return res.status(400).send({ status: false, msg: "please provide date field." })
        }

        if (!description) {
            return res.status(400).send({ status: false, msg: "please provide description field." })
        }
        if (!price) {
            return res.status(400).send({ status: false, msg: "please provide price field." })
        }
        if (!total_quantity) {
            return res.status(400).send({ status: false, msg: "please provide total_quantity field." })
        }
        if (!available_quantity) {
            return res.status(400).send({ status: false, msg: "please provide available_quantity field." })
        }
    
   
     const slotbooking = await slotModel.create(data)
        return res.status(201).send({ status: true, msg: "successful", data: slotbooking })

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}
const fetchSlot = async function (req, res) {

    try {
        let eventId= req.params.eventId
     const slotData = await slotModel.find({event:eventId})
        return res.status(201).send({ status: true, msg: "successful", data: slotData })

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
 }

 module.exports = {createSlot,fetchSlot} 
