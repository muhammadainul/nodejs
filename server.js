const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require('./app/config/config');
const routes = require('./app/routes/index');

const app = express();

var corsOptions = {
    origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', routes);
// app.get("/", (req,res) => {
//     res.json({ message: "Welcome to simple API nodejs-mongodb" });
// });

try {
    mongoose.connect(
        dbConfig.url,
        { 
            useNewUrlParser: true,
            useCreateIndex: true
        }
    );
} catch (error) {
    return error;
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server running on " + corsOptions.origin);
});