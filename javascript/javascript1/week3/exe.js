// 1. Define an array of 5 items that are all numbers
let a = [1,2,3,4,5]
// 2. Add one number at the end of the array
a.push(6)
// 3. Add another number at the beginning of the array
a.unshift(0)
// 4. Print out how many items you have in your array
console.log(a.length)
// 5. Remove the items you just added at the beginning and at the end
a.shift()
a.pop()
// 6. Again print out how many items you have in your array with .length
console.log(a.length)
// 7. Use the for loop to print out the items in your array
for(let i=0; i<a.length;i++){
    console.log(a[i])
}
/* print out all indexof items */
for(let i in a){
    console.log(i)
}
// 8. Use the for..of loop to print out the items in your array
/* print out all items */
for(let j of a){
    console.log(j)
}
// 9. Use the .toString() method to print out the items of your array
a.toString()
// 10. Use the .join() method to print out the items in your array using ; as a separator
a.join(";")
// 11. (Bonus) Check if an item exists in your array with .includes()
a.includes(8)

//  Exercise #1
let cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

// 1. Create a variable catName, use bracket notation to get the value of the 'name' property of cat
let catName = () => {
console.log(cat.name)
}

// 2. Run the greeting() method using dot notation (it will log the greeting to the browser DevTools' console).
cat.greeting()
// 3. Update the color property value to black.
cat.color = 'black'

// Exercise #2
// Create an object to represent one of your favourite bands. The required members are:

// name: A string representing the band name.
// nationality: A string representing the country the band comes from.
// genre: What type of music the band plays.
// members: A number representing the number of members the band has.
// formed: A number representing the year the band formed.
// split: A number representing the year the band split up, or false if they are still together.
// albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
// name: A string representing the name of the album.
// released: A number representing the year the album was released.
// Include at least two albums in the albums array.
let favBand = {
    name : 'Aqua',
    nationality : 'Denmark',
    genre : 'Pop',
    members: '',
    formed: 1980,
    split: 1995,
    albums: [ {name : 'Nike1', released : 1983}, 
                {name : 'Nike2', released : 1987}, 
                {name : 'Nike3', released : 1991},],
  }
  let bandInfo = `my favorite band is called ${favBand.name} and its formed on ${favBand.formed}. It has one of the best album is ${favBand.albums[0].name}`
  console.log(bandInfo)
// Bonus step: create variable called bandInfo which is a string that describes your favorite band
// You can either use string concatenation or string interpolation 
// e.g. my favorite band is called ${band.name} and ...