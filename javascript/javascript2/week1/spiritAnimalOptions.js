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

function showAnimalName() {
  const userName = document.getElementById("inputName").value;
  userName ? document.querySelector("h3").innerText = `${userName} - ${spiritNames[parseInt(Math.random() * 10)]}` : 
    document.querySelector("h3").innerText = "please provide your name";
}
const input = document.getElementById("inputName");
const btn = document.querySelector(".btn1");

const sptName = document.querySelector("h3");
const userOptionSelect = document.getElementById("userOptions")
let userChoice = "";
userOptionSelect.addEventListener('click', ()=> {
  userChoice = document.querySelector("input[name = userOption]:checked").value;
  sptName.innerHTML = "please provide your name";
  input.value = "";
  btn.removeEventListener("click", showAnimalName);
  input.removeEventListener("mouseover", showAnimalName);
  input.removeEventListener("input", showAnimalName);
  if (userChoice === "Click the button") {
    btn.addEventListener("click", showAnimalName);
  } else if (userChoice === "Hover over the input field") {
    input.addEventListener("mouseover", showAnimalName);
  } else if (userChoice === "While I type") {
    input.addEventListener("input", showAnimalName);
  }
})
