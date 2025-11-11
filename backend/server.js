const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(
    'mongodb://localhost:27017/abc_retail'
).then(
    () => console.log("MongoDB Connected")
).catch(
    err => console.log(err)
)

app.use(
    '/api/abc_retail', productRoutes
)

const PORT = 5000;

app.listen(
    PORT, () => {
        console.log(`Server running on ${PORT}`)
    }
)