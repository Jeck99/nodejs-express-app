const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (error, database) => {// use for to connect to the databases  
    if (error) {
        printError(error);
    }
    const dbobject = database.db('postscollection', function (error, response) {  //use for create database
        if (error) {
            printError(error);
        };
    });
    var postsCollection = dbobject.collection("posts", (err, res) => {
        if (err) {
            printError(error);
        };
    });
    database.close()
})

function printError(error) {
    console.log(`MongoClient.connect ${error}`);
    throw error;
}
//GET
function getFunction(dataCollection) {
    dataCollection.find({}, (err, res) => {
        if (err) {
            console.log(`dataCollection.find ${err}`);
        };
        res.forEach(element => {
            console.log(element);
        });
    });
}
//POST
function addFunction(dataCollection, itemToAdd) {
    dataCollection.insertOne(itemToAdd, (err, res) => {
        if (err) {
            console.log(`dataCollection.insertOne ${err}`);
        };
        console.log("insertOne was succesfull");
    });
}
//PUT (UPDATE)
function updateFunction(postsCollection,post) {
    postsCollection.updateOne({ _id: post._id }, { $set: { post } }, (error, res) => {
        if (error) {
            console.log(`postsCollection.updateOne ${error}`);
            throw error;
        }
        getById(postsCollection, 3);
    });
}
//DELETE
function deleteFunction(dataCollection, idToFindAndDelete) {
    dataCollection.deleteOne({ _id: idToFindAndDelete }, (err) => {
        if (err) {
            console.log(`dataCollection.deleteOne ${err}`);
        };
        console.log("deleteOne was succesfull");
    });
}
//GET/:id
function getById(dataCollection,idToFind) {
    dataCollection.findOne({ _id: idToFind }, (err, res) => {
        if (err) {
            console.log(`dataCollection.findOne ${err}`);
        };
        console.log(res);
    });
}
