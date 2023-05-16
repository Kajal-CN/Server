//importing modules
import express from "express";
import cors from "cors";

const express =require("express");
const mysql =require("mysql");
const cors =require("cors");

const app= express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"",
  database:"taskboard",
})
  

app.get("/getData",(req,res)=>{
  res.send("");
})

app.listen(5432,()=>console.log("app is running"));

const { Sequelize, DataTypes } = require("sequelize");

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize(
  `postgres://postgres:123456@localhost:5433/TaskBoard`,
  { dialect: "postgres" }
);

//checking if connection is done
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("./userModel")(sequelize, DataTypes);

//exporting the module
module.exports = db;
