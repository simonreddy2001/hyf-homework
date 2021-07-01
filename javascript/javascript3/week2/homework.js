//Movies exercise
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then(data => {
        const badMovies = data.filter(movie => movie.rating < 4)
        const badMoviesSince2000 = badMovies.filter(badMovie => badMovie.year >= 2000)
        console.log(badMovies.length) //88
        console.log(badMoviesSince2000.length) //67
    })

//Promise that resolves after set time
function promiseResolveAfterTime(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, resolveAfter * 1000)
    })
}

promiseResolveAfterTime(8).then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
});

//promise with async/await

async function asyncPromiseResolveAfterTime(resolveAfter) {
    try {
        return await promiseResolveAfterTime(resolveAfter)
    }
    catch (error) {
        throw "error"
    }
}
asyncPromiseResolveAfterTime(7).then(() => {
    console.log("I am called asynchronously using async function"); // logged out after 8 seconds
});

//Rewrite time
function setTimeoutPromise(resolveAfetr) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, resolveAfetr);
    });
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const location = { lat: latitude, lon: longitude };
            resolve(location)
        }), error => reject(error)
    });
};

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

//Wait 3 seconds
//After 3 seconds fetch some data from any api you like
//Log out the data from the api
function promiseSetTimeout() {
    return new Promise(() =>
        setTimeout(() => {
            fetch('https://yesno.wtf/api').then(res => res.json())
                .then(data => {
                    console.log('promise', data.answer)
                })
        }, 3000)
    )
}
promiseSetTimeout()

function asyncSetTimeout() {
    setTimeout(async () => {
        await fetch('https://yesno.wtf/api').then(res => res.json())
            .then(data => {
                console.log('async func', data.answer)
            })
    }, 3000)
}
asyncSetTimeout()
