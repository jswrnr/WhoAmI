let players = require("./players.json");
let express = require("express");
let app = express();
let port = 8001;
let rootURL = "http://localhost:" + port;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });

//return all current players
app.get("/players", (req, res, next) => {
    res.status(200).send(players);
    next();
})

app.listen(port, () => {})

console.log("server started");