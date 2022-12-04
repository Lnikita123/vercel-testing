const express = require('express');
const bodyParser = require('body-parser');
const route = require("./Route/route.js")
const { default: mongoose } = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://NikitaLilhore:adi123@cluster0.mxdiktq.mongodb.net/Geogoproject?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});