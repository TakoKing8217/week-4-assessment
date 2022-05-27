let friends = []

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
    friends.push(req.body.name)
    res.status(200).send(friends)
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
    res.status(200).send();
  },
};
