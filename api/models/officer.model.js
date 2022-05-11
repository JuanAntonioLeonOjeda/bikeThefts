const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Officer = sequelize.define('officers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: DataTypes.STRING
  },
  department: {
    type: DataTypes.INTEGER
  },
  currentCase: {
    type: DataTypes.INTEGER
  },
  solvedCases: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  }
})

module.exports = Officer