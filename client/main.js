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
    .put("http://localhost:4000/changeNames")
    .then()
    .catch((err) => console.log(err));
};
friendChangeBtn.addEventListener("submit", changeNames);
//---
const namesList = document.querySelector("#thelist");

const newNameForm = document.querySelector(".new-name");

const addedName = (event) => {
  event.preventDefault();
  let newName = {
    name: newNameForm.value,
  };
  axios.post("http://localhost:4000/addNames", addedName).then((res) => {
    let namesArr = res.data;
    namesArr.forEach((el) => {
      let listItem = document.createElement("li");
      listItem.textContent = el;
      namesList.appendChild(listItem);
    });
  });
};

newNameForm.addEventListener("submit", addedName);
