const spiritNames = [
  "The Butterfly",
  "The Spider",
  "The Crow",
  "The Owl",
  "The Hummingbird",
  "The Hawk",
  "The Grasshopper",
  "The Eagle",
  "The Lion",
  "The Tiger",
];

function spiritNamesGenerator(name) {
  return `${name} - ${spiritNames[parseInt(Math.random() * 10)]}`;
}

function showAnimalName() {
  let userName = document.getElementById("inputName").value;
  if (userName !== "") {
    sptName.innerHTML = spiritNamesGenerator(userName);
  } else {
    sptName.innerHTML = "please provide your name";
  }
}
const input = document.getElementById("inputName");
const btn = document.querySelector(".btn1");

const sptName = document.querySelector("h3");
const userOptionSelect = document.getElementById("userOptions")
let userChoice = "";
userOptionSelect.addEventListener('click', ()=> {
  userChoice = document.querySelector("input[name = userOption]:checked").value;
  sptName.innerHTML = "please provide your name";
  input.innerText= "";
  btn.removeEventListener("click", showAnimalName);
  input.removeEventListener("mouseover", showAnimalName);
  input.removeEventListener("keydown", showAnimalName);
  if (userChoice === "Click the button") {
    btn.addEventListener("click", showAnimalName);
  } else if (userChoice === "Hover over the input field") {
    input.addEventListener("mouseover", showAnimalName);
  } else if (userChoice === "While I type") {
    input.addEventListener("keydown", showAnimalName);
  }
})
