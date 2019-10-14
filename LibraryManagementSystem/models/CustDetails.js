var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  Customer_Name: String,
  Customer_LastName: String,
  Customer_id: String,
  Customer_Email: String,
  Customer_Gender: String,
  Customer_Age: String,
  Customer_ZipCode: String,
  Customer_Address: String,
  updated_data: {type: Date, default: Date.now},
});

const CustDetails = mongoose.model('asecollection',BookSchema);
module.exports = CustDetails;
