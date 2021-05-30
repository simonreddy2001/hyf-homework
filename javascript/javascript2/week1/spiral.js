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

const btn=document.querySelector('button')
const sptName=document.querySelector('h3')

btn.addEventListener('click',()=>{
    let userName=document.getElementById('inputName').value
    if(userName!==""){
        sptName.innerHTML=spiritNamesGenerator(userName)
    }
    else{
        sptName.innerHTML="please provide your name"
    }

})


