const Department = require('../models/department.model')

async function createOneDepartment(req, res) {
  try {
    const department = await Department.create(req.body)
    
    res.status(200).json({ message: 'Department created', department: department })
  } catch (error) {
    res.status(500).send(`Error creating department: ${error}`)
  }
}

module.exports = {
  createOneDepartment
}