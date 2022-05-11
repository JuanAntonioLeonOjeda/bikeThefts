const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Department = sequelize.define('departments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.ENUM('Municipal', 'State', 'County')
  },
  activeCases: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  },
  solvedCases: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  }
})

module.exports = Department