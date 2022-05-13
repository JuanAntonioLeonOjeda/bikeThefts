const User = require('../models/user.model')

async function getAllUsers (req, res) {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(`Error getting all users: ${error}`)
  }
}

module.exports = {
  getAllUsers
}