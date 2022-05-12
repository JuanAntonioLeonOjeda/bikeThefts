const { DataTypes } = require('sequelize')
const sequelize = require('../database')

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
  ownerId: {
    type: DataTypes.UUID
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
    type: DataTypes.UUID
  }
})

module.exports = Bike