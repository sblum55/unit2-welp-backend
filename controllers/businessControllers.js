const models = require('../models')

const businessControllers = {}

businessControllers.getOneBusiness = async (req, res) => {
    try {
        const business = await models.business.findOne({
            where: {
                id: req.body.businessId
            }
        })

        // might need to code user check for owner status

        res.send(business)
        console.log(business)

    } catch (error) {
        res.status(400)
        res.json({error})
    }
}

businessControllers.getAllBusinesses = async (req, res) => {
    try {
        const business = await models.business.findAll()

        res.send(business)
        console.log(business)

    } catch (error) {
        res.status(400)
        res.json({error})
    }
}

businessControllers.getReviews = async (req, res) => {
    try {
        const business = await models.business.findOne({
            where: {
                name: req.body.name
                // id: req.body.businessId
            }
        })

        const allReviews = await business.getReviews()
        res.send(allReviews)
        console.log(allReviews)

    } catch (error) {
        res.status(400)
        res.json({error})
    }
}

businessControllers.createBusiness = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.body.userId
            }
        })
        console.log(user)

        const business = await models.business.create({
            name: req.body.name,
            address: req.body.address,
            description: req.body.description,
            image: req.body.image,
            type: req.body.type
        })

        console.log(business)

        const savedBusiness = await user.addBusiness(business)

        res.json({ message: 'Business created', business })

    } catch (error) {
        console.log(error)
        res.status(400)
        res.json({error})
    }
}




module.exports = businessControllers