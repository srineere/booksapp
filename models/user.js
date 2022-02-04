const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
    },
    isPaymentMade: {
        type: Boolean
    },
    TotalEarnings: {
        type: Number
    },
    ReferredUser: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: null
    },    
  });

const User = mongoose.model('User', userSchema);
module.exports = User;