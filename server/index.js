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
  deleteName,
  randomList,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/misfortune", getBadNews);
app.get("/api/darthvader", getVadersHeight);
app.put("/api/changeNames", changeNames);
app.post("/addNames", addFriends);
app.get("/names", deleteName);
app.get("/api/list", randomList);

app.listen(4000, () => console.log("Server running on 4000"));
