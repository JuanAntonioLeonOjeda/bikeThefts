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

Department.hasMany(User, {
  foreignKey: {
    name: 'departmentId',
    type: DataTypes.UUID,
    defaultValue: null
  },
  sourceKey: 'id'
})
User.belongsTo(Department)

module.exports = Department