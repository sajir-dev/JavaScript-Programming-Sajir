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
            "name" : "Mini SS" ,
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

// let map = new Map()

// for (let k =0; k<classObj.students[0].marks.length; k++) {
//     map.set (classObj.students[0].marks[k].subject, classObj.students[0].marks[k].mark)
// }

// console.log(map)


//console.log(map.get('Maths'))

hashMapOfClassObj = () => {
    let arrayMap = []
    for (let i = 0; i< classObj.students.length; i++){
        let map = new Map()
        map.set ("name", classObj.students[i].name)
        map.set ("ID", classObj.students[i].id)
        for (let k =0; k<classObj.students[i].marks.length; k++) {
            map.set (classObj.students[i].marks[k].subject, classObj.students[i].marks[k].mark)
        }
        arrayMap.push(map)
    }
    return arrayMap
}

//console.log(arrayMap)

getAverageInSubject = (subject) => {
    let arrayMap = hashMapOfClassObj()
    let sum = 0
    for (let i = 0; i<arrayMap.length; i++){
        sum = sum + arrayMap[i].get(subject)
    }
    return sum/arrayMap.length
}

console.log(getAverageInSubject('English'))

getTopperOfSubject = (subject) => {
    let arrayMap = hashMapOfClassObj()
    let topmark = arrayMap[0].get(subject)
    let topper = arrayMap[0].get('name')
    for (let i=0; i<arrayMap.length; i++){
        if (arrayMap[i].get(subject)>topmark){
            topmark = arrayMap[i].get(subject)
            topper = arrayMap[i].get('name')
        }
    }
    return [topper, topmark]
}

//console.log(arrayMap[0].get('English'))

//console.log(getTopperOfSubject('Maths'))


displayMarksAndStudents = (classObj) => {
    let text = "\n\t\t\t"
    for (let k = 0; k<classObj.students[0].marks.length; k++){
        let ch = " ".repeat(16-classObj.students[0].marks[k].subject.length)
        text = text.concat (classObj.students[0].marks[k].subject+ch)
    }
    for (let i = 0; i<classObj.students.length; i++){
        let ch = " ".repeat(20-classObj.students[i].name.length)
        text = text.concat("\n"+ classObj.students[i].name + "("+ classObj.students[i].id + ")" );
        for (let k = 0; k<classObj.students[i].marks.length; k++){
            text =text.concat( "\t\t", classObj.students[i].marks[k].mark)
        }
    }
    return text
}


//console.log(displayMarksAndStudents(classObj))
