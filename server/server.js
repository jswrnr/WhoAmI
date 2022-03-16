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

app.use(express.json());

//return all current players
app.get("/players", (req, res, next) => {
    res.status(200).send(players);
    next();
});

//add a player to the list
app.put("/player", (req, res, next) => {
  //error handling?
  if (!req.body) {
    res.sendStatus(400)
    return
  }
  players.push(req.body)
  res.sendStatus(200);
  next();
});

app.options("/", (req, res, next) => {
    res.sendStatus(200);
})

app.listen(port, () => {})

console.log("server started");