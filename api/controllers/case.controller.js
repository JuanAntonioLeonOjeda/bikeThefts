const Case = require('../models/case.model')
const Bike = require('../models/bike.model')
const User = require('../models/bike.model')
const Department = require('../models/department.model')

async function openCase(req, res) {
  try {
    const body = req.body
    const bike = await Bike.create({
      license_num: body.license_num,
      color: body.color,
      type: body.type,
      owner: res.locals.user.fullName,
      ownerId: res.locals.user.id,
      theftDate: body.theftDate,
      theftDescription: body.theftDescription,
      theftAddress: body.theftAddress,  
    })
    const officer = await User.findOne({ where: {
      role: 'officer',
      currentCase: null
    } })
    const newCase = await Case.create( {
      bikeId: bike.id,
      officerId: officer.id,
      ownerId: res.locals.user.id,
    })
    await Bike.update({ caseId: newCase.id }, {
      where: {
        id: bike.id
      }
    })

    res.status(200).json({ message: 'New Case Opened', case: newCase })
  } catch (error) {
    res.status(500).send(`Error opening case: ${error}`)
  }
}

module.exports = {
  openCase
}