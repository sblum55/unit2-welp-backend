const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userControllers = {}

userControllers.createUser = async (req, res) => {
    try {

        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })

        const encryptedId = jwt.sign( { userId: user.id }, process.env.JWT_SECRET)

        res.json({message: 'Account added successfully', userId: encryptedId, user})
    }catch (error) {
        console.log(error);
        res.status(400)
        res.json({error: 'user already exist'})
    }
}

userControllers.userLogin = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })

        const encryptedId = jwt.sign( { userId: user.id }, process.env.JWT_SECRET)

        if ( user.checkPassword(req.body.password) ) {
            res.json({message: 'login successful', user: user, userId: encryptedId })
        } else {
            res.status(400)
            res.json({error: 'login failed'})
        }
    } catch (error) {
        console.log(error)
        res.status(400)
        res.json({error: 'login failed'})
    }
}

userControllers.findUser = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.body.userId
            }
        })
        console.log({user});
        res.json({user})
    } catch (error) {
        res.status(400)
        res.json({error: error.message})
    }
}


userControllers.createReview = async (req, res) => {
    try{
        console.log(req.params.userId)
        console.log(typeof req.params.userId)

        const decryptedId = jwt.verify(req.params.userId, process.env.JWT_SECRET)
        console.log(decryptedId)
        console.log(typeof decryptedId)

        const user = await models.user.findOne ({
            where: {
                id: decryptedId.userId
            }
        })

        const business = await models.business.findOne ({
            where: {
                id: req.body.id
            }
        })

        const review = await models.review.create ({
            headline: req.body.headline,
            content: req.body.content,
            rating: req.body.rating,
        })

        await user.addReview(review)
        await business.addReview(review)
        res.json({user, business, review})

    }catch (error) {
        console.log(error);
    }
}

module.exports = userControllers