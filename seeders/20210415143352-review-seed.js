'use strict';

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await models.review.bulkCreate([
      { headline: 'Fast Food Heaven is Fast Food Hell', content: 'Food was cold, service sucked, and I am never going back to this terrible place!', rating: 1, userId: 1, businessId: 1},
      { headline: 'Fast Food Heaven is Amazing', content: 'Love the food and people! Amazing restaurant!!', rating: 5, userId: 2, businessId: 1},
      { headline: 'Garbage appliances at a garbage store!', content: 'Came in to buy a cactus; they did not have cacti. 0/10 Not going to come here anymore.', rating: 1, userId: 1, businessId: 2},
      { headline: 'Need a fridge? Best place', content: 'Love buying my home appliances here. Best of all, there is a playpen with toys for tots!', rating: 5, userId: 2, businessId: 2},
      { headline: 'Hooli never guesses my autocompletes right', content: 'READ MY DANG MIND HOOLI!!@!@$', rating: 1, userId: 1, businessId: 3},
      { headline: 'Love the email capacity from a Hooli account!', content: 'Hooli is way better than Softmicro and Hooya. Switch your email now!', rating: 5, userId: 2, businessId: 3},
      { headline: 'Stick to plumbing', content: 'When I hire a GC, I expect a GC. Not a plumber. My pipes are gorgeous, but my dry wall does not exist.', rating: 1, userId: 1, businessId: 4},
      { headline: 'One stop shop!', content: 'Love all the services and expertise available at Super Mario Bros Construction. They basically do anything and everything with aplomb!', rating: 5, userId: 2, businessId: 4}
     ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
