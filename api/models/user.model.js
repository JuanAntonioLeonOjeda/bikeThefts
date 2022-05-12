const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Owner = sequelize.define('owners', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
    type: DataTypes.INTEGER
  },
  pastCases: {
    type: DataTypes.ARRAY(DataTypes.INTEGER)
  },
  department: {
    type: DataTypes.INTEGER
  },
  role: {
    type: DataTypes.ENUM('owner', 'officer', 'director', 'admin')
  }
})

module.exports = Owner