const { mongoose } = require ("@configs/database");
const { Schema } = mongoose;

let Marks = Schema (
    {
        subject: {type:String, required:true},
        mark: {type:String}
    }
)

Marks = mongoose.model ("marks", Mark);

const createMark = (payload) => {
    let mark = { subject: payload.subject,
        mark: payload.mark};
    mark = new Mark (mark);
    return await mark.save();
}