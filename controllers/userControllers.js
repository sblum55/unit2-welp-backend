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
        const user = await models.user.findOne ({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        if (user.password === req.body.password){
            res.json({message: 'login successful', ussr:user})
        }else {
            res.status(400)
            res.json({error: 'login failed'})
        }
    }catch (error) {
        res.status(400)
        res.json({error: 'login failed'})
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

        const addReview = await models.review.create ({
            headline: req.body.headline,
            content: req.body.content,
            rating: req.body,rating,
        })

        res.json({user, business, addReview})

    }catch (error) {
        console.log(error);
    }
}

module.exports = userControllers