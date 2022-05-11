const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../database')

const Cases = sequelize.define('cases', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  bikeId: {
    type: DataTypes.INTEGER
  },
  officerId: {
    type: DataTypes.INTEGER
  },
  ownerId: {
    type: DataTypes.INTEGER
  },
  open: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Cases