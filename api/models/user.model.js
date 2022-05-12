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
    }
  },
  password: {
    type: DataTypes.STRING
  },
  currentCase: {
    type: DataTypes.UUID
  },
  pastCases: {
    type: DataTypes.ARRAY(DataTypes.UUID)
  },
  role: {
    type: DataTypes.ENUM('owner', 'officer', 'director', 'admin')
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

//Relación many to many entre Case y User

module.exports = User