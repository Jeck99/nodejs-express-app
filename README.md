# nodejs-express-app
How to build a simple Node.js and Express app by creating a interface and server API
## יצירת שרת Node.js עם Express
   1.	איתחול פרוייקט
   2.	יצירת אינדקס
   3.	התקנת נודמון
   4.	התקנת אקספרס
   5.	יצירת גיט איגנור
   6.	בניית טמפלט באינדקס

/* Required External Modules */

/*** App Variables*/

/*** App Configuration*/

/*** Routes Definitions*/

/*** Server Activation*/

   7.	לייבא מודולים
   8.	app יצירת אובייקט 
   9.	הגדרת פורט : 

const port = process.env.PORT || "8000";
## ראטוניג
 10.	יצירת בקשה בראטוניג :

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

 11.	יצירת ליסנר app.listen(()=>{}) 
 12.	הרצה
## Pug files
 13.	התקנת פאג
 14.	יצירת קובצי פאג :

block variables
doctype html
html
  head
    meta(charset="utf-8")
    meta(name="viewport", content="width=device-width, initial-scale=1, shrink-to-fit=no")
  body
    div#root
    block layout-content
    div#footer
//////////////////////////////////////////
      
extends layout
block layout-content
  div.View

 15.	שימוש ב views :

app.set("views", path.join(__dirname, "views"));

 16.	שימוש במנוע פאג:

 app.set("view engine", "pug");
 
 17.	יצירת בקשה בראוטינג לאינדקס :   

res.render("index", { title: "Home" });
## browser-sync
 18.	התקנת מרנדר לייב : browser-sync
 19.	יצירת פקודה : 

    "ui": "browser-sync start --proxy=localhost:8000 --files='**/*.css, **/*.pug, **/*.js' --ignore=node_modules --reload-delay 10 --no-ui --no-notify"

## Public files
 20.	שימוש בסטטיק להעלאת קבצי עזר:

app.use(express.static(path.join(__dirname, "public")));

 21.	יצירת ספריה ציבורית וקבצי עזר
 22.	הוספת תמונה
## POST and body-parser
 23.	יצירת דף נוסף
 24.	יצירת בקשת POST בראוטינג לדף החדש 
 25.	התקנת body-parser
 26.	הגדרת body-parser לשימוש על ידי app.use
 27.	שליחת המידע שהתקבל מה request.body כתשובה
 28.	שליחת המסך החדש והמידע שהתקבל כתשובה
 29.	
