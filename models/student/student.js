const { mongoose } = require("@configs/database");
const { Schema } = mongoose;
const Division = require("../division/division");
const Marks = require("../marks/marks");

let Student = Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  division: { type: Schema.ObjectId },
  marks: [{ type: Schema.ObjectId }]
});

Student = mongoose.model("students", Student);

const createStudent = async payload => {
  //pending:remove duplication errors based on class name
  let division = await Division.getADivision(payload.division._id);
  let student = {
    division: division,
    name: payload.name,
    rollNo: payload.rollNo
    //marks: payload.marks
  };
  //let teacher = await Division.getTeacherName(student.division);
  //console.log(teacher);
  student = new Student(student);
  student = await student.save();
  //console.log(student.marks[0]);
  return student;
};

const getStudents = async () => {
  return await Student.find();
};

const getStudentInfo = async id => {
  return await Student.findOne(id);
};

const updateStudent = async (id, payload) => {
  let student = await Student.findOne(id);
  console.log(student);
  if (!student) {
    return console.log("no student found");
  }
  if (payload.name) {
    student.name = payload.name;
  }
  if (payload.division) {
    let division = await Division.getADivision(payload.division._id);
    student.division = division;
  }
  console.log(payload.marks);
  if (payload.marks) {
    //JSON.stringify(payload.marks);
    // // Write the logic if the given subject and score already inserted or not
    payload.marks.forEach(element => {
      let markobj = Marks.createMark(element);
      student.marks.push(markobj);
      console.log(markobj);
    });
    // for (let i = 0; i < payload.marks.length; i++){
    // let hex = /[0-9A-Fa-f]{6}/g;
    // payload.marks[i] = (hex.test(payload.marks[i]))? ObjectId(payload.marks[i]) : payload.marks[i];
    // student.marks.push(payload.marks[i])
  }
  // console.log(payload.marks[0]);
  // console.log(student.marks[0]);
  return student;
};

const deleteStudent = async id => {
  console.log("inside model function student delete");
  return await Student.deleteOne(id); // get the line fixed
};

module.exports = {
  Student: Student,
  getStudents,
  getStudentInfo,
  createStudent,
  updateStudent,
  deleteStudent
};
