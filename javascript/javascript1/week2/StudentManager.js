const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 6) {
        if (studentName !== "") {
            if (!class07Students.includes(studentName)) {
                class07Students.push(studentName)
            }
            else {
                console.log(`'Student ${studentName} is already in the class'`)
            }
        }
        else {
            console.log('Student name not defined')
        }
    }
    else {
        console.log("Cannot add more students to class 07")
    }
    if (studentName == "Queen") {
        class07Students.push(studentName)
    }
}


function getNumberOfStudents() {
    return class07Students.length
}