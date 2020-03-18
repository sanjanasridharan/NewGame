const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const url = process.env.ATLAS_URI
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

const Routes = require('./routes/data');
app.use('/data', Routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});