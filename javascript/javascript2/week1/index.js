let favDishes = ["biryani",'burgers','pizza','kurma','chicken']

const body = document.querySelector('body');
const newUl = document.createElement('ul')


body.appendChild(newUl)

for(let i=0;i<favDishes.length;i++){
    const newLi = document.createElement('li')
    newLi.innerHTML= favDishes[i]
    newUl.appendChild(newLi)
    
}

const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const podcastsUl = document.createElement('ul')


body.appendChild(podcastsUl)

for(let i=0;i<podcasts.length;i++){
    const newLi = document.createElement('li')
    const newh1 = document.createElement('h1')
    newh1.innerHTML = podcasts[i].name
    newLi.appendChild(newh1)
    if(podcasts[i].imageUrl){
        const podcastImage = document.createElement('img')
        podcastImage.src = podcasts[i].imageUrl
        newLi.appendChild(podcastImage)
    }
    podcastsUl.appendChild(newLi)
}

function ImageInserter(imageUrl, elementToAppendImageTo){
    const imageToBeInserted = document.createElement('img')
    imageToBeInserted.src = imageUrl
    elementToAppendImageTo.appendChild(imageToBeInserted)
}
const div = document.createElement('div');
body.appendChild(div)
// Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
ImageInserter('https://picsum.photos/536/354', document.querySelector('div'));


const btn = document.createElement('button')
btn.innerHTML = "mouseover me to change TXT"
body.appendChild(btn)

btn.addEventListener('mouseover', ()=>{btn.innerHTML="you mouseover me"})

const btn2 = document.createElement('button')
btn2.innerHTML = "click me to change background"
body.appendChild(btn2)

btn2.addEventListener('click', ()=>{
if(body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white'
    btn2.innerHTML="you clicked for black BG"
  }      
  else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black'
    btn2.innerHTML="you clicked for white BG"
  }    
})

