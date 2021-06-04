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
const btn2=document.querySelector('.btn2')
const sptName=document.querySelector('h3')

btn.addEventListener('click',showAnimalName)
btn2.addEventListener('click',showAnimalName)
input.addEventListener('input',()=> btn.disabled = false)


