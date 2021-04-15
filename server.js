const express = require('express')
const app = express()
const dbConfig = require('./api/config/mongodb.config')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database')
}).catch((error) => {
    console.error('Could not connect to the database. Error : ', error)
    process.exit()
})

app.use(cors())

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

require('./api/routes/perfanalytics.route')(app);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
})