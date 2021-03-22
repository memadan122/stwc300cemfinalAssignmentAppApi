const express = require('express');
const bodyParser = require('body-parser');
const db =require('./database/db');
const cors = require('cors');
const User_route = require('./route/user_route');
const destinationRoute = require('./route/destinationRoute');
const Tours = require('./route/tours')
const { static } = require('express');



const app = express();
app.use(cors());
app.use (bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/images',static(__dirname+"/images"))
app.use(User_route);
app.use(destinationRoute);
app.use(Tours);







app.listen(90)