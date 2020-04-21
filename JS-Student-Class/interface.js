let readlineSync = require('readline-sync')

const studentFunctions = require ('./student_obj')


let className = readlineSync.question("Enter the Class name (Eg: Class A): ")
let teacherName = readlineSync.question("Enter teacher name of "+ className+ ": ")
let NoOfStudents = readlineSync.question("Enter how many students are in "+ className+ ": ")

studentFunctions.classObj.className = className
studentFunctions.classObj.teacherName = teacherName
studentFunctions.classObj.students = []

for ( i = 0; i < NoOfStudents; i++ ){
    let studentName = readlineSync.question("Enter the name of Student: ")
    let studentId = readlineSync.question("Enter the ID of " + studentName + " : ")
    let markEnglish = readlineSync.question("Enter the mark of " + studentName + " in English: ")
    let markMaths = readlineSync.question("Enter the mark of " + studentName + " in Maths: ")
    let markPhysics = readlineSync.question("Enter the mark of " + studentName + " in Physics: ")
    let markChemistry = readlineSync.question("Enter the mark of " + studentName + " in Chemistry: ")
    let markComputer = readlineSync.question("Enter the mark of " + studentName + " in Computer: ")

    let student = {
        "name" : studentName ,
        "id" : studentId ,
        "marks" : [
            {"subject" : "English" , "mark" : markEnglish}, 
            {"subject" : "Maths", "mark" : markMaths}, 
            {"subject" : "Physics", "mark" : markPhysics}, 
            {"subject" : "Chemistry", "mark" : markChemistry},
            {"subject" : "Computer", "mark" : markComputer}
        ]
    }
    studentFunctions.createStudentFromObj (student)
}


while (true) {

    let operationsOptions = require ('readline-sync'), 
    operations = ['See full class', 
    'Change Teacher of the class', 
    'Add Marks of a Student',  
    'Add mark of a subject for all students', 
    'Edit mark of a student', 
    'Remove a student',
    'Delete a subject', 
    'The topper of the subject', 
    'The average marks for a subject', 
    'Sort the students based on name',
    'Sort the students based on Marks obtained in subjects',
    'Exit from all operations' ], 
    index = operationsOptions.keyInSelect(operations, 'Choose the operation index: ');


    switch ( index+1 ){
        case 1:
            console.log (JSON.stringify(studentFunctions.classObj, null, 2));
            break;
        case 2:
            newTeacherName = readlineSync.question ("Enter name of new teacher: ")
            console.log(studentFunctions.changeTeacher(newTeacherName))
            break;
        case 3:
            let studentId = readlineSync.question("Enter the ID of student: ")
            let markEnglish = readlineSync.question("Enter the mark of " + studentId + " in English: ")
            let markMaths = readlineSync.question("Enter the mark of " + studentId + " in Maths: ")
            let markPhysics = readlineSync.question("Enter the mark of " + studentId + " in Physics: ")
            let markChemistry = readlineSync.question("Enter the mark of " + studentId + " in Chemistry: ")
            let markComputer = readlineSync.question("Enter the mark of " + studentId + " in Computer: ")
            let studentMarkInSubjects = [
                {"subject" : "English" , "mark" : markEnglish}, 
                {"subject" : "Maths", "mark" : markMaths}, 
                {"subject" : "Physics", "mark" : markPhysics}, 
                {"subject" : "Chemistry", "mark" : markChemistry},
                {"subject" : "Computer", "mark" : markComputer}
            ]
            studentFunctions.addMarks(studentId, studentMarkInSubjects)

            console.log (JSON.stringify(studentFunctions.classObj, null, 2));
            break;

        case 4:
            let markChangedSubject = readlineSync.question("Enter the subject for which the students mark changed: ")
            const newMarksAndIDsArray = []
            let next
            do {
                let studentID = readlineSync.question("Enter ID of the student: ")
                let IDsNewMark = readlineSync.question("Enter the mark obtained by "+studentID+" in " + markChangedSubject+ ": ")
                let newMarksAndID = {"id" : studentID, "mark" : parseInt(IDsNewMark)}
                newMarksAndIDsArray.push(newMarksAndID)
                next = readlineSync.question("Press 1 to enter next student detail, press 0 if finished: ")
            } while (next.toString(2)==1)

            studentFunctions.addMarksForSubject (markChangedSubject, newMarksAndIDsArray)

            console.log (JSON.stringify(studentFunctions.classObj, null, 2));
            break;

        case 5:
            let studentID = readlineSync.question("Enter ID of the student whose mark to be edited: ")
            let subjectForEditMark = readlineSync.question("Enter for which subject the marks to be edited: ")
            let newMark = readlineSync.question("Enter the new marks: ")
            studentFunctions.editMarks (studentID, subjectForEditMark, newMark)
            console.log (JSON.stringify(studentFunctions.classObj, null, 2));
            break;

        case 6:
            let removeStudent = readlineSync.question("Id of the student to delete: ")
            studentFunctions.removeStudent(removeStudent)
            console.log (JSON.stringify(studentFunctions.classObj, null, 2));
            break;

        case 7:
            let subjectToDelete = readlineSync.question("Subject to be deleted: ")
            studentFunctions.deleteSubject(subjectToDelete)
            console.log (JSON.stringify(studentFunctions.classObj, null, 2));
            break;

        case 8:
            let topperOfSubject = readlineSync.question("Enter subject name to see the topper of the subject( eg: English) : ")
            console.log(studentFunctions.getTopper(topperOfSubject))
            break;

        case 9:
            let avgOfSubject =  readlineSync.question ("Enter subject to check the average marks obtained by students in that subject: ")
            console.log(studentFunctions.getAverageMarksOf (avgOfSubject))
            break;

        case 10:
            console.log(JSON.stringify(studentFunctions.sortOnName(), null, 2))
            break;

        case 11:
            let sortOnMarksOf = readlineSync.question("Enter the subject to sort the students based on the mark obtained in that subject: ")
            console.log(JSON.stringify(studentFunctions.sortOnMarks (sortOnMarksOf), null, 2))
            break;
        case 12:
            return;
        default:
            console.log('Choose a valid index')
    }
}


