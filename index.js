/*** Required External Modules מודלים שנצטרך לייבא*/
const express = require('express');
const path = require('path');

/*** App Variables משתנים*/
const app = express();
const port = process.env.port | 3000;

/***  App Configuration וההגדרות APP יצירת ה*/

//שימוש במנוע פאג להרצת תצוגה מונעת מידע

/*** Routes Definitions יצירת הראוטניג*/
app.get('/',(req,res)=>{
    res.send("Hello Express")
})

/*** Server Activation הרצת השרת*/
app.listen(port)