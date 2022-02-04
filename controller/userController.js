const express = require('express')
let router = express.Router()
const User = require('../models/user')

router.get('/', (req,res) => {
    User.find()
    .populate('ReferredUser')
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

router.post('/', (req,res) => {
    let user = new User(req.body);
    user.save()
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

// router.get('/:id',(req,res) => {
//     User.findById(req.params.id)
//     .then( result => res.send(result))
//     .catch(err => console.log(err))
// })

router.delete('/:id', (req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

router.get('/:id', (req,res) => {
    User.findById(req.params.id)
    // .populate('ReferredUser')
    .then(result => {
        console.log(result.ReferredUser[0])
        User.findByIdAndUpdate(result.ReferredUser[0],{TotalEarnings:15},{useFindAndModify: false})
        .then(result => console.log(result))
    
        User.findByIdAndUpdate(result._id,{isPaymentMade:true})
        .then(result=> res.send(result))
        // console.log(result._id)
        // res.send(result)
    })
    .catch(err => console.log(err))
})

module.exports = router