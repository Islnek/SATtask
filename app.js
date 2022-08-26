const express = require("express")




const app = express();


app.route("/calculateDisselUsageForDistance/:distance/:yearOfProduction/:fuelUsagePerHundred")
    .get(function (req, res) {

        let distance = req.params.distance
        let year = req.params.yearOfProduction
        let hundred = req.params.fuelUsagePerHundred


        let fuelconsumption = (distance / 100) * hundred


        res.send("This is your fuel consumption " + fuelconsumption + " for " + distance + "KM. When year of your vehicle is " + year)

    });


app.route("/probabilityOfUnitInjectorFail/:VINCODE")
    .get(function (req, res) {

        let vin = req.params.VINCODE


        let failureRate = Math.random() * 100;
        failureRate = Math.floor(failureRate) + 1;

        res.send("Fail probability of your car is " + failureRate + "%")
    });




app.post("/", function (req, res) { });


app.listen(3000);