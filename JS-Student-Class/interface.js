let readlineSync = require('readline-sync')

const studentFunctions = require ('./student_obj')

studentFunctions.createClass();

while (true) {
    readlineSync, 
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
    index = readlineSync.keyInSelect(operations, 'Choose the operation index: ');
    switch ( index+1 ){
        case 1:
            console.log(studentFunctions.displayClass())
            break;
        case 2:
            newTeacherName = readlineSync.question ("Enter name of new teacher: ")
            console.log(studentFunctions.changeTeacher(newTeacherName))
            break;
        case 3:
            let studentId = readlineSync.question("Enter the ID of student: ")
            studentFunctions.addMarks(studentId, enterMarkInfoOfStudent())
            break;

        case 4:
            let markChangedSubject = readlineSync.question("Enter the subject for which the students mark changed: ")
            const newMarksAndIDsArray = studentFunctions.enterMarkInfoOfSubject ()
            studentFunctions.addMarksForSubject (markChangedSubject, newMarksAndIDsArray)
            break;

        case 5:
            let studentID = readlineSync.question("Enter ID of the student whose mark to be edited: ")
            let subjectForEditMark = readlineSync.question("Enter for which subject the marks to be edited: ")
            let newMark = readlineSync.question("Enter the new marks: ")
            studentFunctions.editMarks (studentID, subjectForEditMark, newMark)
            break;

        case 6:
            let removeStudent = readlineSync.question("Id of the student to delete: ")
            studentFunctions.removeStudent(removeStudent)
            break;

        case 7:
            let subjectToDelete = readlineSync.question("Subject to be deleted: ")
            studentFunctions.deleteSubject(subjectToDelete)
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
            console.log(studentFunctions.displayMarksAndStudents(studentFunctions.sortOnName()))
            break;
        case 11:
            let sortOnMarksOf = readlineSync.question("Enter the subject to sort the students based on the mark obtained in that subject: ")
            console.log(studentFunctions.displayMarksAndStudents(studentFunctions.sortOnMarks (sortOnMarksOf)))
            break;
        case 12:
            return;
        default:
            console.log('Choose a valid index')
    }
}





