const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://siddhantsg004:Ishucr7100@cluster0.acthr.mongodb.net/")
//.env
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
