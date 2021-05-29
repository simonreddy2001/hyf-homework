let nameC = ""
let todos = []
function calc(command){
    console.log(eval(command.substring(8)))
}
function getReply(command){
    let arr = command.split(' ')
if(command.includes("Hello")) {
    let givenName = command.split(' ')
    nameC=givenName[4]
    console.log(`Nice to meet you ${nameC}`)
}
else if(!isNaN(arr[2])){
    calc(command);
}
else {
    switch(command){
    case "What is my name":
        if(nameC!=="") console.log(`${nameC}`)
        else console.log("name has not yet been mentioned")
        break;
    case "Add fishing to my todo":
        todos.push("fishing")
        console.log("fishing added to your todo")
        break;
    case "Add singing in the shower to my todo":
        todos.push("singing in the shower")
        console.log("singing in the shower added to your todo")
        break;
    case "Remove fishing from my todo":
        for(let i=0;i<todos.length;i++){if(todos[i]=="fishing"){todos.splice(i,1)}}
        console.log("Removed fishing from your todo")
        break;
    case "What is on my todo?":
        console.log(todos)
        break;
    case "What day is it today?":
        dateArr = new Date().toDateString().split(" ");
        console.log(`${dateArr[2]}. of ${dateArr[1]} ${dateArr[3]}`)
        break;
    case "Set a timer for 4 minutes":
        console.log("Timer set for 4 minutes")  
        setTimeout(()=> alert("Timer done"), 4000)
        break;
    case "What is best language for coding":
        console.log("JavaScript")
        break;
    default:
        console.log("I dint get you")
        break;
    }
    }

}
getReply("Hello my name is Benjamin")
getReply("What is my name")
getReply("Add fishing to my todo")
getReply("Add singing in the shower to my todo")
getReply("Remove fishing from my todo")
getReply("What is on my todo?")
getReply("what is 3 + 3")
getReply("what is 3 * 3")
getReply("what is 3 - 3")
getReply("Set a timer for 4 minutes")
getReply("What is best language for coding")
//Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
// What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
// Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
// Add singing in the shower to my todo - Should add singing in the shower to a list of todos
// Remove fishing from my todo - Should respond with "Removed fishing from your todo"
// What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
// What day is it today? - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
// Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
// Add one or more command to your voice assistant
