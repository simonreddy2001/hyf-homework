const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function WhenWillWeBeThere(object){
    let time = object.destinationDistance/object.speed
  return `${Math.floor(time)} hours and ${Math.floor((time-Math.floor(time)) * 60)} minutes`;
}
const travelTime = WhenWillWeBeThere(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes