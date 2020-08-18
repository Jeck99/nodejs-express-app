/*** Required External Modules מודלים שנצטרך לייבא*/
const express = require('express');
const path = require('path');

/*** App Variables משתנים*/
const app = express();
const port = process.env.port | 3000;

/***  App Configuration וההגדרות APP יצירת ה*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));


/*** Routes Definitions יצירת הראוטניג*/
app.get('/',(req,res)=>{
    res.render("index")
})

/*** Server Activation הרצת השרת*/
app.listen(port)