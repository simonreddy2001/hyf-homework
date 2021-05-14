const class07Students = [];
function addStudentToClass(studentName) {
    if ((class07Students.length < 6 && studentName!=="") || studentName=="Queen" ) {
        if (!class07Students.includes(studentName)) {
            class07Students.push(studentName)
        }
        else{
            console.log(`'Student ${studentName} is already in the class'`)
        }
    }
    else {
        console.log("Cannot add more students to class 07")
    }
}

function getNumberOfStudents() {
    return class07Students.length
}