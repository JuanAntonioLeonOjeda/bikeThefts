const User = require('../models/user.model')
const Case = require('../models/case.model')

async function getAllUsers (req, res) {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(`Error getting all users: ${error}`)
  }
}

async function getOwnProfile(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(`Error getting profile: ${error}`)
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

async function updateOwnProfile(req, res) {
  try {
    await User.update(req.body, {
      where: {
        id: res.locals.user.id
      }
    })

    res.status(200).json({ message: 'Profile updated!' })
  } catch (error) {
    res.status(500).send(`Error updating profile: ${error}`)
  }
}

async function updateOneUser(req, res) {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({ message: 'Profile updated!' })
  } catch (error) {
    res.status(500).send(`Error updating profile: ${error}`)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({ where: { id: req.params.id } })
    if (!user) {
      res.status(200).send('User not found')
    } else {
      res.status(200).send('User deleted')
    }
  } catch (error) {
    res.status(500).send(`Error deleting user: ${error}`)
  }
}

async function getOwnOpenCase(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    const openCase = await user.getCase({
      where: {
        status: 'open'
      }
    })

    if(!openCase) {
      res.status(200).send("You don't have any open cases")
    } else {
      res.status(200).json(openCase)
    }
  } catch (error) {
    res.status(500).send(`Error getting open case: ${error}`)
  }
}

module.exports = {
  getAllUsers,
  getOwnProfile,
  getOneUser,
  updateOwnProfile,
  updateOneUser,
  deleteUser,
  getOwnOpenCase
}