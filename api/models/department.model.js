const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Case = require('./case.model')
const User = require('./user.model')


const Department = sequelize.define('departments', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.ENUM('Municipal', 'State', 'County')
  }
})

Department.hasMany(Case, {
  foreignKey: {
    name: 'departmentId',
    type: DataTypes.UUID,
    allowNull: false
  },
  sourceKey: 'id'
})
Case.belongsTo(Department)

Department.hasMany(User, {
  foreignKey: {
    name: 'departmentId',
    type: DataTypes.UUID
  },
  sourceKey: 'id'
})
User.belongsTo(Department)

module.exports = Department