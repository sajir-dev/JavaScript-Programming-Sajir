const { mongoose } = require ("@configs/database");
const { Schema } = mongoose;

let Student = Schema (
    {
        name:{type: String, required:true},
        id:{type:String, required:true},
        mark:{type:Object.id}
    }
);

Student = mongoose.model ("students", Student);

const createStudent = (payload) => {
    let student = {
        name: payload.name,
        id: payload.id
    }
    student = new Student(student);
    return await student.save();
}