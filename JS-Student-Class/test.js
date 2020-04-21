let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}

let sampleStudent = { // Sample student for testing functionalities
    "name": "nijesh",
    "id": "110" ,
    "marks": [
        {"subject": "English", "mark": 20},
        {"subject": "Maths", "mark": 40},
        {"subject" : "Physics", "mark" : 38}, 
        {"subject" : "Chemistry", "mark" : 46},
        {"subject" : "Computer", "mark" : 40}
     ]
}

//SampleMarkData for testing adding the marks of a student
let sampleMarkData = [ 
    {"subject" : "English" , "mark" : 20}, 
    {"subject" : "Maths", "mark" : 40}, 
    {"subject" : "Physics", "mark" : 48}, 
    {"subject" : "Chemistry", "mark" : 38}]


let sampleMarkForSubject = [{"id" : "103", "mark" : 11}, {"id" : "104", "mark" : 11}] 
//Sample data of marks obtained by each id for a particular subject

getAverageMarksOf = ( sub ) => {
    let subjectIndexArray ={ 'English' : 0 , 'Maths' : 1, 'Physics' : 2, 'Chemistry': 3, 'Computer': 4}
    let subjectIndex = subjectIndexArray[sub]
    let markSumOfAll = 0
    for (let i = 0; i< classObj.students.length; i++){
        markSumOfAll = markSumOfAll + classObj.students[i].marks[subjectIndex].mark
        
    }
    return markSumOfAll/classObj.students.length
}


console.log(getAverageMarksOf('Computer'))

// console.log(classObj.students[0].marks[4].mark)
// console.log(classObj.students[1].marks[4].mark)
// console.log(classObj.students[2].marks[4].mark)
// console.log(classObj.students[3].marks[4].mark)