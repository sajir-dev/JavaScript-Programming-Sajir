let classObj = {}

let readlineSync = require('readline-sync')

createClass = () => {
    let className = readlineSync.question("Enter the Class name (Eg: Class A): ")
    let teacherName = readlineSync.question("Enter teacher name of "+ className+ ": ")
    let noOfStudents = readlineSync.question("Enter how many students are in "+ className+ ": ")

    classObj.className = className
    classObj.teacherName = teacherName
    classObj.students = []

    for ( i = 0; i < noOfStudents; i++ ){
        enterStudentInfo();
    }
}

enterStudentInfo = () => {
    let studentName = readlineSync.question("Enter the name of Student: ")
    let studentId = readlineSync.question("Enter the ID of " + studentName + " : ")
    let student = {
        "name" : studentName ,
        "id" : studentId ,
        "marks" : enterMarkInfoOfStudent(studentId, studentName)
    }
    createStudentFromObj (student)
}

enterMarkInfoOfStudent = (idnum, studentName ) => {
    let markEnglish = readlineSync.question("Enter the marks in English: ")
    let markMaths = readlineSync.question("Enter the marks in Maths: ")
    let markPhysics = readlineSync.question("Enter the marks in Physics: ")
    let markChemistry = readlineSync.question("Enter the mark in Chemistry: ")
    let markComputer = readlineSync.question("Enter the mark of in Computer: ")
    return  [
        {"subject" : "English" , "mark" : markEnglish}, 
        {"subject" : "Maths", "mark" : markMaths}, 
        {"subject" : "Physics", "mark" : markPhysics}, 
        {"subject" : "Chemistry", "mark" : markChemistry},
        {"subject" : "Computer", "mark" : markComputer}
    ]
}

displayClass = () => {
    let text = "\n" + classObj.className + "\n" + "Teacher in-charge: "+ classObj.teacherName+"\n"
    for (let i = 0; i<classObj.students.length; i++){
        text = text.concat("\nStudent Name: " + classObj.students[i].name+ "\nStudent ID: "+ classObj.students[i].id+"\n")
        for (let k = 0; k<classObj.students[i].marks.length; k++){
            text = text.concat( classObj.students[i].marks[k].subject + " : " + classObj.students[i].marks[k].mark+"\n" ) 
        }
    }
    return text
}

displayMarksAndStudents = (classObj) => {
    let text = "\n"
    for (let i = 0; i<classObj.students.length; i++){
        text = text.concat("\nStudent Name: " + classObj.students[i].name+ "\nStudent ID: "+ classObj.students[i].id+"\n")
        for (let k = 0; k<classObj.students[i].marks.length; k++){
            text = text.concat( classObj.students[i].marks[k].subject + " : " + classObj.students[i].marks[k].mark+"\n" ) 
        }
    }
    return text
}

changeTeacher = (newTeacher) => { // function to change teacher of the class
    classObj.teacherName = newTeacher
    return classObj
}
//console.log(changeTeacher("Bindu"))


createStudentFromObj = (studentObj) => { //Creating student from a Student    
    classObj.students.push(studentObj)
    return (studentObj.name + " with ID " + studentObj.id + "has generated")
}
//createStudentFromObj(sampleStudent)


createStudentFromIdAndName = (idnum, name) => { //Creating student from idnum and name
    let student = {"id" : idnum, "name" : name}
    classObj.students.push(student)
    return (console.log ("inside createStudent"))
}
//createStudentFromIdAndName (108, "Amal")

studentFinder = (idnum) => { // this function will return student with ID idnum
    for (let i = 0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum ){
            return classObj.students[i]
        }
    }
    return console.log("Could not find the student")
}

enterMarkInfoOfSubject = () => {
    const newMarksAndIDsArray = []
    let next
    do {
        let studentID = readlineSync.question("Enter ID of the student: ")
        let IDsNewMark = readlineSync.question("Enter the mark obtained by "+ studentID + ": ")
        let newMarksAndID = {"id" : studentID, "mark" : parseInt(IDsNewMark)}
        newMarksAndIDsArray.push(newMarksAndID)
        next = readlineSync.question("Press 1 to enter next student detail, press 0 if finished: ")
    } while (next.toString(2)==1)
    return newMarksAndIDsArray
}

addMarks = (idnum, markData) => { //function for adding marks
    let student = studentFinder(idnum)
    student.marks = markData
    return 1
}
//addMarks (110, SampleMarkData)


addMarksForSubject = (subject, markForSubject) => { //marks obtained by each id for a particular subject adding to corresponding id
    for (let i=0 ; i<markForSubject.length; i++){
        for (let j=0; j<classObj.students.length; j++){
            if (classObj.students[j].id === markForSubject[i].id){
                for (let k=0; k<classObj.students[j].marks.length; k++){
                    if (classObj.students[j].marks[k].subject === subject){
                        classObj.students[j].marks[k].mark = markForSubject[i].mark
                    } 
                }
            }
        }
    }
}
//addMarksForSubject(SampleMarkForSubject, "Chemistry")


editMarks = (idnum, subject, newMark) => { // editing marks for a given id, of a given subject
    for (let i = 0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum){
            for (k=0; k<classObj.students[i].marks.length; k++){
                if (classObj.students[i].marks[k].subject === subject){
                    classObj.students[i].marks[k].mark = newMark
                    return true
                }
            }
        }
    }
    return ("no such records")
}
//editMarks ( '101', 'English', 5000 )


removeStudent = (idnum) => {
    for (let i=0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum){
            classObj.students.splice (i, 1)
            console.log ("student with ID: "+ idnum + " removed from the record")
        }
    }
    return false
}
//removeStudent ('101')


deleteSubject = (subject) => {
    for (let i = 0; i < classObj.students.length; i++){
        for (let k = 0; k <classObj.students[i].marks.length; k++){
            if (classObj.students[i].marks[k].subject === subject){
                classObj.students[i].marks.splice(k,1)
            }
        }
    }
    return console.log(subject + " entry deleted from all student records")
}
//deleteSubject("Maths")


subjectIndexFinder = ( sub, studentIndex) => {
    for (let k = 0; k <classObj.students[studentIndex].marks.length; k++){
        if (classObj.students[studentIndex].marks[k].subject === sub){
            return k
        }
    }
    return console.log (" No matching records for student: " + classObj.students[studentIndex].id)
}


getTopper = (sub) => { //get the topper of a given subject 
    let index = 0 
    let subjectIndex = subjectIndexFinder( sub, 0)
    let topperMark = classObj.students[0].marks[subjectIndex].mark

    for (let i = 1; i < classObj.students.length; i++) {
        subjectIndex = subjectIndexFinder( sub, i)
        if (classObj.students[i].marks[subjectIndex].mark > topperMark){
            topperMark = classObj.students[i].marks[subjectIndex].mark
            index = i
        }
    }
    return classObj.students[index]
}
//console.log(getTopper( "English"))


// getAvg = (sub) => { //get average marks for a given subject
//     let subjectSum = 0
//     let subjectIndex = subjectIndexFinder ( sub, 0)
//     subjectSum = classObj.students[0].marks[subjectIndex].mark

//     for (let i = 1; i < classObj.students.length; i++) {
//         subjectIndex = subjectIndexFinder ( sub, i)
//         subjectSum = subjectSum +  parseInt(classObj.students[i].marks[subjectIndex].mark)
//     }
//     return subjectSum/classObj.students.length
// }
//console.log(getAvg("Computer"))


getAverageMarksOf = ( sub ) => {
    let subjectSum = 0
    let subjectIndex = subjectIndexFinder ( sub, 0)
    subjectSum = classObj.students[0].marks[subjectIndex].mark

    for (let i = 1; i < classObj.students.length; i++) {
        subjectIndex = subjectIndexFinder ( sub, i)
        subjectSum = subjectSum +  parseInt(classObj.students[i].marks[subjectIndex].mark)
    }
    return subjectSum/classObj.students.length

    // let subjectIndexArray ={ 'English' : 0 , 'Maths' : 1, 'Physics' : 2, 'Chemistry': 3, 'Computer': 4}
    // let subjectIndex = subjectIndexArray[sub]
    // let markSumOfAll = 0
    // for (let i = 0; i< classObj.students.length; i++){
    //     markSumOfAll = markSumOfAll + parseInt(classObj.students[i].marks[subjectIndex].mark)
    // }
    // return markSumOfAll/classObj.students.length
}


sortOnName = () => {  // sort the list based on name
    for (let i = 0; i< classObj.students.length-1; i++){
        for ( let j = i; j< classObj.students.length; j++){
            if (classObj.students[i].name > classObj.students[j].name){
                let temp = classObj.students[i]
                classObj.students[i] = classObj.students [j]
                classObj.students[j] = temp
            }
        }
    }
    return classObj
}
//console.log (sortOnName())


sortOnMarks = (sub) => {  // sort the list based on marks for a given subject
    let subjectIndex1
    let subjectIndex2

    for (let i = 0; i< classObj.students.length-1; i++){
        subjectIndex1 = subjectIndexFinder ( sub, i)
        for ( let j = i; j< classObj.students.length; j++){
            subjectIndex2 = subjectIndexFinder ( sub, j)
            if (classObj.students[i].marks[subjectIndex1].mark < classObj.students[j].marks[subjectIndex2].mark){
                let temp = classObj.students[i]
                classObj.students[i] = classObj.students[j]
                classObj.students[j] = temp
            }
        }
    }
    return classObj
}
//console.log (sortOnMarks("Maths"))


totalMarkOfStudent = ( idnum ) => { //total mark of a given id 
    let student = studentFinder (idnum)
    let markSum = 0
    for (let i = 0; i<student.marks.length; i++){
        markSum = markSum + student.marks[i].mark
    }
    return markSum
}

module.exports = { classObj : classObj, 
    createClass : createClass,
    changeTeacher : changeTeacher, 
    createStudentFromObj : createStudentFromObj, 
    displayClass : displayClass,
    enterMarkInfoOfStudent: enterMarkInfoOfStudent,
    enterMarkInfoOfSubject: enterMarkInfoOfSubject,
    addMarks: addMarks, 
    addMarksForSubject: addMarksForSubject, 
    editMarks: editMarks, 
    removeStudent: removeStudent, 
    deleteSubject: deleteSubject, 
    getTopper: getTopper, 
    getAverageMarksOf : getAverageMarksOf,
    sortOnName:sortOnName, 
    sortOnMarks: sortOnMarks,
    displayMarksAndStudents: displayMarksAndStudents,
    totalMarkOfStudent: totalMarkOfStudent }


//console.log(changeTeacher("Bindu"))

//createStudent(sampleStudent)

//createStudent (108, "Amal")

//addMarks (110, SampleMarkData)

//addMarksForSubject(SampleMarkForSubject, "Chemistry")

//editMarks ( '101', 'English', 5000 )

//removeStudent ('101')

//deleteSubject("Maths")

//console.log(getTopper( "English"))

//console.log(getAvg("Computer"))

//console.log (getAvg ("Maths"))

//console.log (sortOnName())

//console.log (sortOnMarks("Maths"))

//console.log(totalMarkOfStudent('101'))

//console.log(JSON.stringify(classObj.students, null, 2))
