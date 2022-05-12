const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Bike = require('./bike.model')

const Case = sequelize.define('cases', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  bikeId: {
    type: DataTypes.UUID
  },
  officerId: {
    type: DataTypes.UUID
  },
  ownerId: {
    type: DataTypes.UUID
  },
  departmentId: {
    type: DataTypes.UUID
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