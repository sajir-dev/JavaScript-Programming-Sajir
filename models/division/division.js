const { mongoose } = require ("@configs/database");
const { Schema } = mongoose;

let Division = Schema (
    {
        name:{type:String, required:true},
        teacherName:{type:String}
    }
);

Division = mongoose.model("divisions", Division);

const createDivision = (payload) => {
    let division = {
        name : payload.name,
        teacherName : payload.teacherName
    }
    division = new Division (division);
    return await division.save();
}