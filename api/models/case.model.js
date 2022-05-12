const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Bike = require('./bike.model')

const Case = sequelize.define('cases', {
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
  departmentId: {
    type: DataTypes.INTEGER
  },
  open: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

Case.hasOne(Bike, {
  foreignKey: 'caseId',
  sourceKey: 'id'
})

Bike.belongsTo(Case, {
  foreignKey: 'caseId',
  targetId:'id'
})

module.exports = Case