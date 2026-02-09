const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = process.env.MONGO_URL || "mongodb://admin:qwerty@localhost:27017";     // The 2nd url with "localhost", is only going to work when we are running directly from the code. But if we are gonna run our app through Docker, we are gonna use the "service name" in Docker compose.  
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("college-db");      // if this database doesn't exist in my MongoDB, then this line will also "automatically create" it.
    const data = await db.collection('users').find({}).toArray();
    
    client.close();
    res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db("college-db");
    const data = await db.collection('users').insertOne(userObj);     // same thing happens here. If a collection with the name specified doesn't exist, it'll also get created automatically.
    console.log(data);
    console.log("data inserted in DB");
    client.close();
    res.send("User added successfully")
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});