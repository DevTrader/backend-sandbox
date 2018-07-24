const mongo = require('mongodb');

//mongo.MongoClient.connect('mongodb://nicolaskao:abc123123@ds121696.mlab.com:21696/restaurant', (err, db)=>{
mongo.MongoClient.connect('mongodb://localhost:27017/createdJustNow', (err, client)=>{
    if(err){
        return console.log('[UNABLE TO CONECT TO MONGO]')
    }
    console.log('[MONGO CONNECTION SUCCESSFUL]')
    //client has to access db on v3
    const db = client.db('createdJustNow')
    //inserting stuff
    db.collection('GeneratedCollection').insertOne({
        "testing": "this is some stuff"
    }, (err, res)=>{
        if(err){
           return console.log('[ERROR SUBMITING DOCUMENT TO COLLECTION]')
        }
        console.log('[ADDED DOCUMENT TO COLLECTION SUCCESSFULLY!]')
    })

    client.close();
})