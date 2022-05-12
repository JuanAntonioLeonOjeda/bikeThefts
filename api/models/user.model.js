const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Owner = sequelize.define('owners', {
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
  department: {
    type: DataTypes.UUID
  },
  role: {
    type: DataTypes.ENUM('owner', 'officer', 'director', 'admin')
  }
})

module.exports = Owner