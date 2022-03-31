const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 3005

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/* データの取得 */
app.post("/list", (req, res) => {
    //データベース接続
    MongoClient.connect('mongodb://localhost:27017/ポケモンDB', (err, db) => {
        if (err) throw err;
        console.log("データベース接続に成功しました")
            //取得
        const dbName = db.db("ポケモンDB")
        dbName.collection("poke_data8").find().toArray((err, results) => {
            if (err) throw error;
            console.log(results);
            res.send(results);
            db.close();
        })
    });
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'))
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    })
}


app.listen(port, () => {
    console.log("listening on 3005")
})