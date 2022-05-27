let friends = [];
const axios = require("axios");
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getBadNews: (req, res) => {
    const natesCompliments = [
      "You are strong",
      "You are lit",
      "You are dope",
      "You are moving forward",
      "You are power",
      "You are awake",
      "You are alive",
      "You are turnt",
      "You are trunk",
    ];
    let randomSpot = Math.floor(Math.random() * natesCompliments.length);
    let randomDevastation = natesCompliments[randomSpot];
    res.status(200).send(randomDevastation);
  },

  getVadersHeight: (req, res) => {
    //   axios
    //     .get("https://swapi.dev/api/people/4/")
    //     .then((res) => {
    //       let { height } = res.data;
    //       let hisHeight = document.createElement("h2");
    //       hisHeight.textContent = `Darth Vader's height is ${height}`;
    //       document.body.appendChild(hisHeight);
    //     })
    //     .catch();
    let height = "202cm";
    res.status(200).send(height);
  },

  addFriends: (req, res) => {
    console.log(req.body.name);
    friends.push(req.body.name);
    res.status(200).send(friends);
  },

  putNames: (req, res) => {
    friends = [
      "Speed Racer",
      "Trixi",
      "Spritle",
      "Chim Chim",
      "Pops",
      "Ma",
      "Sparky",
    ];
  },

  changeNames: (req, res) => {
    console.log("hit3");
    for (let i = 0; i < friends.length; i++) {
      if (friends[i] === req.body.originalName) {
        req.body.ogName = req.body.newName;
      }
    }
    res.status(200).send();
  },

  deleteName: (req, res) => {
    console.log("Hit 87");
    friends = friends.pop();
    res.status(200).send(friends);
  },
  randomList: (req, res) => {
    let randomPlanet = Math.floor(Math.random() * 10);
    let address = "https://swapi.dev/api/planets/" + +randomPlanet + "/";
    axios
      .get(address)
      .then((res) => {
        console.log(res.data);
        var result = res.data;
      })
      .catch();
    console.log("Worked45");
    res.status(200).send(result);
  },
};
