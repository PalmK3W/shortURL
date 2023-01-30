var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

class DBConnect{
    static SaveData(data_save){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Test");
            try{
                dbo.collection("stat").insertOne(data_save, function(err, result) {
                    if (err) throw err;
                    
                    console.log("Save in database success");
                    db.close();
                    
                });
            }
            catch(e){
                return false;
            }
        });
    }
}
module.exports = DBConnect;