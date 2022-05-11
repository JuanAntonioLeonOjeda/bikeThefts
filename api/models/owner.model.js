const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Owner = sequelize.define('owners', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  currentCase: {
    type: DataTypes.INTEGER
  },
  pastCases: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  }
})

module.exports = Owner