const models = require('../models')

const userControllers = {}

userControllers.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })
        res.json({message: 'Account added successfully', user})
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
                email: req.body.email,
                password: req.body.password
            }
        })
        if (user.password === req.body.password) {
            res.json({message: 'login successful', user: user})
        } else {
            res.status(400)
            res.json({error: 'login failed'})
        }
    } catch (error) {
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
        const user = await models.user.findOne ({
            where: {
                id: req.params.userId
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