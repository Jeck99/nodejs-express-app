/*** Required External Modules מודלים שנצטרך לייבא*/
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const dataFromMongo = []
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient.connect(url);
var url = 'mongodb://localhost:27017/';
/*** App Variables משתנים*/
const app = express();
// const port = process.env.port | 4000;

/***  App Configuration וההגדרות APP יצירת ה*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*** Routes Definitions יצירת הראוטניג*/
app.get('/', (req, res) => {
    res.render("index")
})
app.get('/pics', (req, res) => {
    res.render("pictures")
})
app.route('/user')
    .get((req, res) => {
        res.render("pictures", {
            MongoClient(error, database) => {// use for to connect to the databases  
                if (error) {
                    console.log(`MongoClient.connect ${error}`);
                    throw error;
                }
                const dbobject = database.db('postscollection', function (error, response) {  //use for create database
                    if (error) {
                        console.log(`dbobject = database ${err}`);
                    };
                });
                postsCollection = dbobject.collection("posts", (err, res) => {
                    if (err) {
                        console.log(`postsCollection = dbobject ${err}`);
                    };
                });
                postsCollection.findOne({}, (err, res) => {
                    if (err) {
                        res.send(`postsCollection.find ${err}`);
                    };
                    return res;
                })
            })
        })
    }).post((req, res) => {
        res.render("user",
            {
                user:
                {
                    name: req.body.first_name,
                    lastName: req.body.last_name
                }
            })
    })

app.post('/picView', (req, res) => {
    res.render('picture-view', {
        picture: {
            url: req.body.url,
            pic_color: req.body.color
        }
    })
})
/*** Server Activation הרצת השרת*/
app.listen(process.env.PORT | 4000)