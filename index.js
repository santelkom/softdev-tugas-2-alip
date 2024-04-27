const express = require('express');
const mysql = require('mysql');
const app = express()
const bodyParser = require('body-parser');
const activityController = require('./controllers/activityController');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true}))

app.get('/', activityController.getData)
app.post('/tambah', activityController.createData)
app.put('/edit/(:id)', activityController.updateData)
app.get('/delete/(:id)', activityController.deleteData)

app.listen(3000, () => {
    console.log("app running...")
})

