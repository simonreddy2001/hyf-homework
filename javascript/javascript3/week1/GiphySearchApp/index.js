//api_key=GBqVaF0BqJQ6cFmXKetzAu1SgA2HlFrA

const gifSearchWord = document.getElementById("search_word");
const numOfGifs = document.getElementById("num_gifs");

let userInput = "";
let userLimit = 1;

gifSearchWord.addEventListener("input", (event) => userInput = event.target.value);
numOfGifs.addEventListener("input", (event) => userLimit = event.target.value);
const resultDiv = document.createElement("div");

function getGifs() {
    resultDiv.innerHTML = "";
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=GBqVaF0BqJQ6cFmXKetzAu1SgA2HlFrA&q=${userInput}&limit=${userLimit}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(api => (api.data.map(item => {
            const gifImage = document.createElement("img");
            gifImage.src = item.images.original.url;
            resultDiv.appendChild(gifImage);
            document.body.appendChild(resultDiv);
        })));
}
const btn = document.getElementById('btn');
btn.addEventListener("click", getGifs);