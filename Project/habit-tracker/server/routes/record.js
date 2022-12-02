const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("/");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("records")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   habit: req.body.habit,
   goal: req.body.goal,
   completedDays: req.body.days,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});

recordRoutes.route("/record/increment/:id").post(async (req, res) => {
  const { id } = req.params;
  collection.updateOne({ _id: id }, { $inc: {completedDays: 1 } });
  return res.status(200).json({ msg: "OK" });
})

// This section helps you update record
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      habit: req.body.name,
      goal: req.body.goal,
      completedDays: req.body.days,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
 });

module.exports = recordRoutes;
/*
const express = require("express");

// recordRoutes is instance of express router
// use it to define routes
// router added as middle ware, take control of requests
const recordRoutes = express.Router();

// connect to database
const dbo = require("../db/conn");

// convert id from string to ObjectId
const ObjectId = require("mongodb").ObjectId;

// get a list of all records
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("/");
    db_connect 
        .collection("records")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect 
        .collection("records")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//create a new record
recordRoutes.route("/record/add/").post(function (req, response) {
    //console.log("works");
    let db_connect = dbo.getDb("/");
    //var json = JSON.parse(req.body);
    let myobj = {
        habit: req.body.habit,
        goal: req.body.goal,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = recordRoutes;
*/