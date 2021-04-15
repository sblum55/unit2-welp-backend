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
     await models.business.bulkCreate([
      { name: 'Fast Food Heaven', address: '101 Park Drive', description: 'Best burgers and fries on Park Drive', type: 'Restaurant', image: 'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg', userId: '7'},
      { name: 'Sears R Us', address: '2000 Glenville Ave', description: 'Toys and household appliances galore', type: 'Merchandising', image: 'https://www.bostik-industrial.com/assets/800x480_127.-Household-App.jpg', userId: '7'},
      { name: 'Hooli', address: '8 Cupertino Infinity Ave', description: 'Tech company that thinks its changing the world', type: 'Tech', image: 'https://cdn.dribbble.com/users/3132/screenshots/2138242/hooli.jpg?compress=1&resize=400x300', userId: '7'},
      { name: 'Super Mario Bros Contracting', address: '842 Lakeside Road', description: 'Broken pipes? Broken building? We got you covered!', type: 'Construction', image: 'https://www.denofgeek.com/wp-content/uploads/2020/02/hoskins.jpg', userId: '7'},
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
