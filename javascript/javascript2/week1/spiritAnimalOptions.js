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
    "The Tiger"
    ]

function spiritNamesGenerator(name){
    return `${name} - ${spiritNames[parseInt(Math.random()*10)]}`
}

function showAnimalName(){
    let userName=document.getElementById('inputName').value
    if(userName!==""){
        sptName.innerHTML=spiritNamesGenerator(userName)
    }
    else{
        sptName.innerHTML="please provide your name"
    }
    btn.disabled = true;
}
const input = document.getElementById('inputName')
const btn=document.querySelector('.btn1')

const sptName=document.querySelector('h3')

btn.addEventListener('click',showAnimalName)

let userChoice = "";
document.getElementById("userOptions").onclick = function() {
    userChoice = document.querySelector('input[name = userOption]:checked').value;
    if(userChoice === "Click the button") {
        btn.addEventListener("click", showAnimalName);
        btn.innerHTML="click to generate new Spiral Animal Name"
    } else if(userChoice === "Hover over the input field") {
        sptName.addEventListener("mouseover", showAnimalName);
    } else if(userChoice === "While I type") {
        sptName.addEventListener("keydown", showAnimalName);
    } 
}