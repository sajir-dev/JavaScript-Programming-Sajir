const { mongoose } = require("@configs/database");
const { Schema } = mongoose;

let Division = Schema({
  name: { type: String, required: true },
  teacherName: { type: String }
});

Division = mongoose.model("divisions", Division);

const createDivision = async payload => {
  let division = {
    name: payload.name,
    teacherName: payload.teacherName
  };
  division = new Division(division);
  division = await division.save();
  return division;
};

const getDivisions = async () => {
  return await Division.find();
};

const getADivision = async id => {
  return await Division.findOne(id);
};

const getTeacherName = async div => {
  return await div.teacherName;
};

const updateDivision = async (div, payload) => {
  let division = await Division.findOne({ id: div._id });
  if (!division) {
    return console.log("no such records found");
  }

  if (payload.name) {
    division.name = payload.name;
  }
  if (payload.teacherName) {
    division.teacherName = payload.teacherName;
  }
  console.log(division.name + "  " + division.teacherName);
  return await division.save();
};

const deleteDivision = async div => {
  let division = await Division.findOne({ id: div._id });
  if (!division) {
    return console.log("no such records found");
  }

  return await division.remove();
};

module.exports = {
  objects: Division,
  createDivision,
  getDivisions,
  getADivision,
  getTeacherName,
  updateDivision,
  deleteDivision
};
