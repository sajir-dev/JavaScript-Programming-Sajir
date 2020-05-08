const { mongoose } = require("@configs/database");
const { Schema } = mongoose;

let Division = Schema({
  name: { type: String, required: true },
  teacherName: { type: String }
});

Division = mongoose.model("divisions", Division);

const createDivision = payload => {
  let division = {
    name: payload.name,
    teacherName: payload.teacherName
  };
  division = new Division(division);
  return division.save();
};

const getDivision = () => {
  return division.objects;
};

const updateDivision = payload => {
  if (payload.id === objects.division.id) {
    objects.name = payload.name;
    objects.teacherName = payload.teacherName;
  }
  return this.objects.save();
};

const deleteDivision = payload => {
  if (payload.id === objects.division.id) {
    delete this.objects;
  }
};

module.exports = {
  objects: Division,
  createDivision,
  getDivision,
  updateDivision,
  deleteDivision
};
