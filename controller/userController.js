const express = require('express')
let router = express.Router()
const User = require('../models/user')

router.get('/', (req,res) => {
    User.find()
    .populate('ReferredUser')
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

// api for updating 
router.post('/', async (req,res) => {
    try {
        const result = await User.findById(req.body.id)
        // console.log(result.ReferredUser[0])

        let updatedResult = await User.findByIdAndUpdate(result.ReferredUser[0], {$inc: {TotalEarnings: 10}})
        // console.log(updatedResult)

        updatedResult = await User.findByIdAndUpdate(result._id, {isPaymentMade:true})
        res.send(updatedResult)

    } catch (err) {
        console.log(err)
        res.send({msg: err.message})
    }
})

router.get('/:id', (req,res) => {
    User.findById(req.params.id)
    .populate('ReferredUser')
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

router.post('/create', (req,res) => {
    let user = new User(req.body);
    user.save()
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

router.delete('/:id', (req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then( result => res.send(result))
    .catch(err => console.log(err))
})

module.exports = router