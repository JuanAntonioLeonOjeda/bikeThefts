const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Bike = require('./bike.model')
const Case = require('./case.model')


const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('owner', 'officer', 'director', 'admin'),
    defaultValue: 'owner',
  }
})

User.hasMany(Bike, {
  foreignKey: {
    name: 'ownerId',
    type: DataTypes.UUID
  },
  sourceKey: 'id'
})

Bike.belongsTo(User)

Case.belongsToMany(User, { as: 'User', foreignKey: 'userId', through: 'Users_Cases' })
User.belongsToMany(Case, { through: 'Case', foreignKey: 'caseId', through: 'Users_Cases' })

module.exports = User