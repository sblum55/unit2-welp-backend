'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.business.belongsTo(models.user)
      models.business.belongsToMany(models.user, {through: 'review'})
    }
  };
  business.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'business',
  });
  return business;
};