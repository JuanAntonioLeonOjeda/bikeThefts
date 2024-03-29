const User = require('../models/user.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signup (req, res) {
  try {
    req.body.role = 'owner'
    const user = await createUser(req.body)

    const payload = { email: user.email }
    const token = jwt.sign(payload, process.env.TOKEN, { expiresIn: '1h' })

    res.status(200).json({ message: `${user.fullName}'s profile succesfully created`, info: { email: user.email, token: token } })
  } catch (error) {
    res.status(500).send(`Error creating user: ${error}`)
  }
}

async function officer (req, res) {
  try {
    req.body.role = 'officer'
    const user = await createUser(req.body)

    res.status(200).json({ message: `Officer ${user.fullName}'s profile succesfully created`, user })
  } catch (error) {
    res.status(500).send(`Error creating officer: ${error}`)
  }
}

async function director (req, res) {
  try {
    req.body.role = 'director'
    const user = await createUser(req.body)

    res.status(200).json({ message: `Director ${user.fullName}'s profile succesfully created`, user })
  } catch (error) {
    res.status(500).send(`Error creating director: ${error}`)
  }
}

async function createUser (body) {
  const hash = bcrypt.hashSync(body.password, 10)
  body.password = hash
  const user = await User.create({
    fullName: body.fullName,
    email: body.email,
    password: body.password,
    role: body.role
  })
  
  return user
}

async function login (req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) return res.status(500).send('Email or password incorrect')

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) return res.status(500).send(err)
      if (!result) return res.status('Email or password incorrect')

      const payload = { email: user.email }
      const token = jwt.sign(payload, process.env.TOKEN, { expiresIn: '1h' })

      res.status(200).json({ email: user.email, token: token })
    })
  } catch (error) {
    res.status(500).send(`Error login user: ${error}`)
  }
}

module.exports = {
  signup,
  officer,
  director,
  login
}