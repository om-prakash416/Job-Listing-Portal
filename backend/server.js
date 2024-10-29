const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "job-portal-app"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var RecruiterRouter =require("./routes/Recruiters");
var JobRouter=require("./routes/Jobs");
var ApplicationRouter=require("./routes/Application");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//app.use(express.json());

// Connection to MongoDB
mongoose.connect('mongodb+srv://omprakash8242110:nbGxVORb4A4HALcI@cluster0.xcuhp.mongodb.net/job-portal-app?retryWrites=true&w=majority&appName=Cluster0' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/recruiter", RecruiterRouter);
app.use("/job",JobRouter);
app.use("/application",ApplicationRouter)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
