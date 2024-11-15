//write basic boiler plate code ,
const express = require('express')
const { createTodo } = require("./types")
const { updateTodo } = require("./types")
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "wrong inputs",
        })
        return;
    }
    //put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
})
app.get("/todos", async function (req, res) {
    const todos = await todo.find();
    console.log(todos)
    res.json({
        todos
    })
})
app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:${3001}`);
});