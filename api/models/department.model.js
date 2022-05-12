const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Department = sequelize.define('departments', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.ENUM('Municipal', 'State', 'County')
  },
  activeCases: {
    type: DataTypes.ARRAY(DataTypes.UUID)
  },
  solvedCases: {
    type: DataTypes.ARRAY(DataTypes.UUID)
  },
  officers: {
    type: DataTypes.ARRAY(DataTypes.UUID)
  },
  director: {
    type: DataTypes.UUID
  }
})

module.exports = Department