const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getBadNews,
  getVadersHeight,
  changeNames,
  addFriends,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/misfortune", getBadNews);
app.get("/api/darthvader", getVadersHeight);
app.get("/api/changeNames", changeNames);
app.get("/api/addNames", addFriends);

app.listen(4000, () => console.log("Server running on 4000"));
