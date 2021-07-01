//exercise 1
//Using async await
//fetch yes or no from this api: https://yesno.wtf/api. log out the answer
async function fetchingYesNo() {
    const fetchdata = await fetch('https://yesno.wtf/api')
    const res = await fetchdata.json()


    console.log(res.answer)
}
fetchingYesNo()
//exercise 2
//Using promises
//fetch yes or no from this api: https://yesno.wtf/api. log out the answer

function fetchYesNo() {
    fetch('https://yesno.wtf/api').then(res => res.json())
        .then(data => {
            console.log('promise', data.answer)
        })
}
fetchYesNo()

//Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message
function fetchYesNoError() {
    fetch('https://knajskdskj.jasd').then(res => res.json())
        .then(data => {
            console.log('promise', data.answer)
        }).catch(error => {
            console.log('promise', error)
        })
}
fetchYesNoError()

//exercise 3
//Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
//Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.
new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('hello') 
        reject('error')
    }, 2000)
})
    .then(data => console.log('it resolved', data))
    .catch(data => console.log('it rejected', data))

//exercise 5
//Create a function that returns a promise, that i can use like this:
// getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// Sometimes it should resolve and sometimes it should reject. 
// Look into Math.random

const users = ['benna', 'magdy', 'carolina']
function getLoggedInUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 10) < 5) {
                resolve(users)
            }
            else {
                reject('error')
            }
        }, 2000)
    })
}
getLoggedInUsers()
    .then(a => {
        console.log(a); // ['benna', 'magdy', 'carolina']
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        console.log('finished loading')
    })

//Now try consume the getLoggedInUsers using async/await
async function getLoggedInUsersAsync() {
    await getLoggedInUsers().then(a => {
        console.log(a); // ['benna', 'magdy', 'carolina']
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        console.log('finished loading')
    })
}
getLoggedInUsersAsync()