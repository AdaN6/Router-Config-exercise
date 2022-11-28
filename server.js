const express = require("express")
const app = express()
const pg = require("pg")
const {Pool} = pg

const pool = new Pool();

app.listen(5000)