const orderModel = require("../models/orderModel");
const eventModel = require("../models/eventModel");
const slotModel = require("../models/slotModel");
const userModel = require("../models/userModel");
const ticketModel = require("../models/ticketModel");
const Validator= require("../validator/validation")
const moment = require('moment')


/**************************************************************Create Order*********************************************/


const createOrder = async function (req, res) {
    try {
        let data = req.body

        if (!Validator.isValidRequestBody(data)) {
            return res.status(400).send({ status: false, msg: "Please Add input to complete the order" })
        }

        let {  ticket,user} = data


        let ticketData  = await ticketModel.findById( ticket )
        if (!ticketData) {
            return res.status(404).send({ status: 'false', msg: "ticket not found" })
        }
   data.event = ticketData.event
        data.purchase_date = moment(Date.now()).format('MM/DD/YYYY');
        data.total_price = ticketData.quantity*ticketData.price;
  data.user=user
        let saveData= await orderModel.create(data)
    res.status(201).send({status:true, msg:"successfully created", data:saveData }) 

    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}



module.exports.createOrder=  createOrder