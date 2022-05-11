const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Bike = sequelize.define('bikes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  color: {
    type: DataTypes.STRING
  },
  bikeType: {
    type: DataTypes.ENUM('Road', 'Mountain', 'Hybrid', 'Electric')
  },
  ownerId: {
    type: DataTypes.INTEGER
  },
  theftDate: {
    type: DataTypes.DATE
  },
  theftDescription: {
    type: DataTypes.STRING
  },
  theftAddress: {
    type: DataTypes.STRING
  },
  caseId: {
    type: DataTypes.INTEGER
  }
})

module.exports = Bike