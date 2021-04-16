const models = require('./models')

/* const testUser = async () => {
    const user1 = await models.user.create({
        name: 'Test Hash',
        email: 'testhash@test.com',
        password: '1234'
    })

    console.log(user1)
}

testUser() */




/* const createUsers = async () => {
    const user1 = await models.user.create({
        name: 'Test1',
        email: 'test1@test.com',
        password: '1234'

    })

    const user2 = await models.user.create({
        name: 'Test2',
        email: 'test2@test.com',
        password: '1234'
    })
}

const createBiz = async () => {
    const business1 = await models.business.create({
        name: 'Biz 1',
        address: 'Address 1',
        description: 'Description 1',
        type: 'Type 1'

    })

    const business2 = await models.business.create({
        name: 'Biz 2',
        address: 'Address 2',
        description: 'Description 2',
        type: 'Type 2'

    })
}

const associateBiz = async () => {
    const business1 = await models.business.findOne({
        where: {
            name: 'Biz 1',
        }
    })

    const user1 = await models.user.findOne({
        where: {
            name: 'Test1'
        }
    })

    const userNewBiz = await user1.addBusiness(business1)
}

const biz1reviewTest = async () => {
    

    const user1 = await models.user.findOne({
        where: {
            name: 'Test1'
        }
    })

    const biz1 = await models.business.findOne({
        where: {
            name: 'Biz 1'
        }
    })
    const review1Biz1 = await models.review.create({
        headline: 'Test Review 5',
        content: 'TBD',
        rating: 5,
    })
    await review1Biz1.setUser(user1)
    await review1Biz1.setBusiness(biz1)
} */

//createUsers()
//createBiz()
//associateBiz()
//biz1reviewTest()
