const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
// ----
const misfortuneBtn = document.getElementById("badFortune");

const getMisfortune = () => {
  axios.get("http://localhost:4000/api/misfortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

misfortuneBtn.addEventListener("click", getMisfortune);
//---
const vaderBtn = document.getElementById("vader");
const getVaderHeight = () => {
  axios.get("http://localhost:4000/api/darthvader").then((res) => {
    const data = res.data;
    alert(data);
  });
};
vaderBtn.addEventListener("click", getVaderHeight);
// // ---
// const friendChangeBtn = document.querySelector("#change-submit");

// const changeNames = (event) => {
//   event.preventDefault();
//   let ogName = document.querySelector(".original-name");
//   let newName = document.querySelector(".new-name");
//   let namesObj = {
//     ogName,
//     newName,
//   };
//   axios
//     .put("http://localhost:4000/changeNames")
//     .then()
//     .catch((err) => console.log(err));
// };
// friendChangeBtn.addEventListener("submit", changeNames);
// //---
const namesList = document.querySelector("#thelist");

const newNameForm = document.querySelector(".new-name-form");

const newNameText = document.querySelector(".new-name");

const clearNames = () => {
  namesList.innerHTML = "";
};

const addedName = (event) => {
  event.preventDefault();
  clearNames();
  console.log(newNameText.value, "hit1");
  let newName = {
    name: newNameText.value,
  };
  axios.post("http://localhost:4000/addNames", newName).then((res) => {
    let namesArr = res.data;
    namesArr.forEach((el) => {
      let listItem = document.createElement("li");
      listItem.textContent = el;
      namesList.appendChild(listItem);
    });
  });
  newNameText.value = "";
};

newNameForm.addEventListener("submit", addedName);

// ---
const friendChangeBtn = document.querySelector("#change-submit");

const changeNames = (event) => {
  event.preventDefault();
  let ogName = document.querySelector(".original-name");
  let newName = document.querySelector(".new-name");
  let namesObj = {
    ogName,
    newName,
  };
  axios
    .put("http://localhost:4000/changeNames", namesObj)
    .then()
    .catch((err) => console.log(err));
};
friendChangeBtn.addEventListener("submit", changeNames);
//---

const deleteBtn = document.querySelector(".delete-last-name");

const removeLast = (event) => {
  event.preventDefault();
  clearNames();
  console.log("hit D");
  axios.get("http://localhost:4000/addNamed").then((res) => {
    let namesArr = res.data;
    namesArr.forEach((el) => {
      let listItem = document.createElement("li");
      listItem.textContent = el;
      namesList.appendChild(listItem);
    });
  });
};

deleteBtn.addEventListener("click", removeLast);

//-----

const listBtn = document.querySelector("#list-of-things");

const getAList = (event) => {
  event.preventDefault();
  console.log("Worked");
  let randomPlanet = Math.floor(Math.random() * 10);
  let address = "https://swapi.dev/api/planets/" + +randomPlanet + "/";
  console.log(address);
  axios
    .get(address)
    .then((res) => {
      console.log(res.data);
      alert(
        `The planet ${res.data.name} has a population of ${res.data.population}`
      );
    })
    .catch();
};

listBtn.addEventListener("click", getAList);
