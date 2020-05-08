const { mongoose } = require("@configs/database");
const { Schema } = mongoose;
const division = require ('../division/division');

let Student = Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  division:{type:Object.id}
});

Student = mongoose.model("students", Student);

const createStudent = payload => {
  let student = {
    name: payload.name,
    id: payload.id
  };
  student = new Student(student);
  return student.save();
};

const getStudents = () => {
  return await student.objects;
}

const getStudentInfo = () => {
  return await student(req.params._id);
}

const updateStudent  = payload => {
  if (payload.id === object.student._id){
    student.name = payload.name;
  }
}

const deleteStudent = payload => {
  if (payload.id === object.student._id){
    delete( object.student());
  }
}

module.exports = {
  Student : Student,
  getStudents,
  getStudentInfo,
  createStudent,
  updateStudent,
  deleteStudent
}
