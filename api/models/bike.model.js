const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Bikes = sequelize.define('bikes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  color: {
    type: DataTypes.STRING
  },
  type: {
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

module.exports = Bikes