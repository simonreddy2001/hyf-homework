class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const user1 = new User('simon', 'reddy')
console.log(user1.firstName)
console.log(user1)
console.log(user1.fullName())

class CV {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        this.email = email
    }

    addJob(job) {
        this.jobs.push(job)
    }

    removeJob(job) {
        const updatedJobs = this.jobs.filter(
            (it) => job.id !== it.id
        )
        this.jobs = updatedJobs
    }

    addEducation(education) {
        this.educations.push(education)
    }

    removeEducation(education) {
        const updatedEducations = this.educations.filter(
            (it) => education.id !== it.id
        )
        this.educations = updatedEducations
    }

    renderCV() {
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        body.appendChild(h1)
        h1.innerHTML = this.email

        const jobsh2 = document.createElement('h2')
        body.appendChild(jobsh2)
        jobsh2.innerHTML = 'Jobs'
        const ul1 = document.createElement('ul')
        body.appendChild(ul1)
        for (let i = 0; i < this.jobs.length; i++) {
            const li = document.createElement('li')
            ul1.appendChild(li)
            li.innerHTML = this.jobs[i].title
        }
        const eduh2 = document.createElement('h2')
        body.appendChild(eduh2)
        eduh2.innerHTML = 'Educations'
        const ul2 = document.createElement('ul')
        body.appendChild(ul2)

        for (let i = 0; i < this.jobs.length; i++) {
            const li = document.createElement('li')
            ul2.appendChild(li)
            li.innerHTML = this.educations[i].title
        }


    }
}
function generateId() {
    return Math.floor(Math.random() * 10000)
}
class Job {
    constructor(title, description, startDate, endDate) {
        this.id = generateId()
        this.title = title
        this.description = description
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
    }
}
class Education {
    constructor(title, school, address, startDate, endDate) {
        this.id = generateId()
        this.title = title
        this.school = school
        this.address = address
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
    }
}
const edu1 = new Education('10', 'st\'Pauls High School', 'ppm', '06-06-2001', '04-25-2002')
const edu2 = new Education('inter', 'sri chaitanya', 'gtr', '06-06-2002', '04-25-2004')
const edu3 = new Education('B.tech', 'CJITS', 'Warangal', '06-10-2004', '05-25-2008')

const job1 = new Job('IT Consultant', 'support for IT queries', '02-10-2010', '05-25-2013')
const job2 = new Job('Manager', 'administration and leadership', '07-05-2013', '02-28-2018')
const job3 = new Job('Salesforce Admministrator', 'salesforce consultant', '03-01-2018', '02-28-2021')

const myCV = new CV('simon.reddy2001@gmail.com')

myCV.addEducation(edu1)
myCV.addEducation(edu2)
myCV.addEducation(edu3)

myCV.addJob(job1)
myCV.addJob(job2)
myCV.addJob(job3)
myCV.removeJob(job1)
myCV.renderCV()
