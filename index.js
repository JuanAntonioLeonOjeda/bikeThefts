process.stdout.write('\x1B[2J\x1B[0f')

require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()