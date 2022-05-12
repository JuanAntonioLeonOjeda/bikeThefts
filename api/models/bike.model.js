const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Case = require('./case.model')

const Bike = sequelize.define('bikes', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  color: {
    type: DataTypes.STRING
  },
  bikeType: {
    type: DataTypes.ENUM('Road', 'Mountain', 'Hybrid', 'Electric')
  },
  theftDate: {
    type: DataTypes.DATE
  },
  theftDescription: {
    type: DataTypes.STRING
  },
  theftAddress: {
    type: DataTypes.STRING
  }
})

Bike.hasOne(Case, {
  foreignKey: {
    name: 'bikeId',
    type: DataTypes.UUID,
    allowNull: false
  },
  sourceKey: 'id'
})

Case.belongsTo(Bike)

module.exports = Bike