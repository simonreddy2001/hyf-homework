const firstWords = ["one", "easy","elated","elegant","embarrassed","enchanting","encouraging","energetic","enthusiastic","envious"]
const secondWords = ["evil","excited","expensive","exuberant","good","gorgeous","graceful","grieving","grotesque","grumpy"]
let randomNumber1 = Math.floor(Math.random() * 10)
let randomNumber2 = Math.floor(Math.random() * 10)
let startupName = firstWords[randomNumber1]+" "+secondWords[randomNumber2]
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`)