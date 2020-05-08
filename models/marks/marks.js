const { mongoose } = require("@configs/database");
const { Schema } = mongoose;

let Marks = Schema({
  subject: { type: String, required: true },
  score: { type: String }
});

Marks = mongoose.model("mark", Mark, "marks");

const createMark = payload => {
  let mark = new Marks({ subject: payload.subject, score: payload.score });
  return mark.save();
};

const updateMark = payload => {
  let mark = { subject: payload.subject, mark: payload.mark };
  mark = new Mark(mark);
  return mark.save();
};

const deleteMark = payload => {
  if (mark.objects.id === payload.objects.id) {
    delete mark.object;
    return true;
  }
  return console.error(error, "error");
};

module.exports = {
  objects: Marks,
  createMark,
  updateMark,
  deleteMark
};
