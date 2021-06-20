const body = document.getElementById('body')
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data);

        body.appendChild(document.createElement('h1'))
        const title = document.querySelector('h1')
        title.innerHTML = `There are ${data.number} astronauts in space, they are: `

        const names = data.people
        //console.log(names)
        body.appendChild(document.createElement('ol'))
        const orderedList = document.querySelector('ol')

        names.forEach(element => {
            const li = document.createElement('li')
            orderedList.appendChild(li);
            li.innerHTML = element.name;
            //console.log(element.name)
        });
    });
setInterval(function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageUrl = document.getElementById('img1')
            imageUrl.src = data.message

        });
}, 2000);

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const breeds = Object.keys(data.message)

        console.log(breeds)
        body.appendChild(document.createElement('ul'))
        const unorderedList = document.querySelector('ul')

        breeds.forEach(element => {
            const li = document.createElement('li')
            const figure = document.createElement('figure')
            const imageBreed = document.createElement('img')
            unorderedList.appendChild(li);
            unorderedList.appendChild(figure);
            figure.appendChild(imageBreed)
            li.innerHTML = element;
            const figcaption = document.createElement('figcaption')
            figure.appendChild(figcaption)
            figcaption.innerHTML = element
            fetch(`https://dog.ceo/api/breed/${element}/images/random`)
                .then(response => response.json())
                .then(data => {
                    imageBreed.src = data.message
                    imageBreed.width = 300;
                    imageBreed.height = 300;
                })
        });
    });

