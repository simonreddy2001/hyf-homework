const repoUsers = ['Jul-S', 'Sarulathaanbu', 'teldinesh']

class Repo {
    constructor(name, url, owner) {
        this.name = name
        this.url = url
        this.owner = owner
    }
}

function renderUserRepos(repo) {

    return fetch(`https://api.github.com/search/repositories?q=user:${repo}`)
        .then(response => response.json())
        .then(data => {
            const h1 = document.createElement('h1')
            const ul = document.createElement('ul')
            h1.innerText = `${repo}'s Repositories`
            document.body.appendChild(h1)
            document.body.appendChild(ul)
            data.items.forEach(a => {
                const li = document.createElement('li')
                const content = document.createElement('div')

                const name = document.createElement('h3')
                name.innerHTML = a.name
                content.appendChild(name)

                const url = document.createElement('p')
                url.innerHTML = a.html_url
                content.appendChild(url)

                const owner = document.createElement('p')
                owner.innerHTML = a.owner.login
                content.appendChild(owner)

                li.appendChild(content)
                ul.appendChild(li)
            })
        })
}
function getData() {
    Promise.all([
        renderUserRepos(repoUsers[0]), renderUserRepos(repoUsers[1]), renderUserRepos(repoUsers[2])
    ]).then(() => {
        console.log("All fetched")
    })
}

getData()

