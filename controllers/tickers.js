const OrderModel = require('../models/ticker.js'); 

module.exports = {
    index,
}

async function index(req, res) {
  try {
    let orders = await OrderModel.find({user: req.user._id}).sort({createdAt:'desc'}).exec();
    res.status(200).json(orders)         
  } catch(err) {
    res.status(400).json(err);
  }
}
