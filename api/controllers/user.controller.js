const User = require('../models/user.model')

async function getAllUsers (req, res) {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(`Error getting all users: ${error}`)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(`Error getting user: ${error}`)
  }
}

module.exports = {
  getAllUsers,
  getOneUser
}