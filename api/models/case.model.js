const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Case = sequelize.define('cases', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  open: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Case