const Case = require('../models/case.model')
const Bike = require('../models/bike.model')
const User = require('../models/user.model')
const Department = require('../models/department.model')

async function openCase(req, res) {
  try {
    const body = req.body
    const bike = await Bike.create({
      license_num: body.license_num,
      color: body.color,
      bikeType: body.type,
      owner: res.locals.user.fullName,
      ownerId: res.locals.user.id,
      theftDate: body.theftDate,
      theftDescription: body.theftDescription,
      theftAddress: body.theftAddress,  
    })
    const officer = await searchOfficer()
    if(!officer) return res.status(200).send('No officers available')

    const newCase = await Case.create( {
      bikeId: bike.id,
    })
    newCase.addUser(officer.id)
    newCase.addUser(res.locals.user.id)

    await User.update({ openCase: true }, {
      where: {
        id: res.locals.user.id
      }
    })

    await User.update({ openCase: true }, {
      where: {
        id: officer.id
      }
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

async function searchOfficer() {
  const officer = await User.findOne({ where: {
    role: 'officer',
    openCase: false
  } })
  return officer
}

module.exports = {
  openCase
}