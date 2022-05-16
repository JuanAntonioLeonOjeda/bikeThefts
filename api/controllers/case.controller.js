const Case = require('../models/case.model')
const Bike = require('../models/bike.model')
const User = require('../models/user.model')
const Department = require('../models/department.model')

async function getAllCases(req, res) {
  try {
    const cases = await Case.findAll({ include: {
      model: User
    } })
    res.status(200).json(cases)
  } catch (error) {
    res.status(500).send(`Error getting all cases: ${error}`)
  }
}

async function getOneCase(req, res) {
  try {
    const selectedCase = await Case.findByPk(
      req.params.id,
      {include: {
        model: User
      }
    })

    res.status(200).json(selectedCase)
  } catch (error) {
    res.status(500).send(`Error getting message: ${error}`)
  }
}

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

    const newCase = await Case.create( {
      bikeId: bike.id,
    })

    if (officer) {
      newCase.addUser(officer.id)
      await User.update({ openCase: true }, {
        where: {
          id: officer.id
        }
      })
    }

    newCase.addUser(res.locals.user.id)
    await User.update({ openCase: true }, {
      where: {
        id: res.locals.user.id
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

async function closeCase(req, res){
  try {
    const officer = await User.findByPk(res.local.user.id, {
      include: {
        model: Case
      }
    })
    const cases = officer.getCases()
    const openCase = cases.findOne({
      where: {
        open: true
      }
    })
    res.status(200).send('Case closed!')
  } catch (error) {
    res.status(500).send(`Error closing case: ${error}`)
  }
}

module.exports = {
  getAllCases,
  openCase,
  getOneCase,
  closeCase
}