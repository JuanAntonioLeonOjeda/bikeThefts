const Bike = require('../models/bike.model')
const User = require('../models/user.model')
const Case = require('../models/case.model')

async function getAllBikes(req, res) {
  try {
    const bikes = await Bike.findAll({
      where: req.query,
      include: {
        model: Case,
        include: {
          model: User
        }
      }
    })
    res.status(200).json(bikes)
  } catch (error) {
    res.status(500).send(`Error getting bikes: ${error}`)
  }
}

async function getOneBike(req, res) {
  try {
    const bike = await Bike.findByPk(req.params.id, { include: {
      model: Case,
      include: {
        model: User
      }
    }
  })
  res.status(200).json(bike)
  } catch (error) {
    res.status(500).send(`Error getting bike: ${error}`)
  }
}

module.exports = {
  getAllBikes,
  getOneBike
}