import { useState } from "react"

export function CreateTodo(props) {
    //react-query
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

  return <div>
    <input style={{
        padding:10,
        margin:10
    }} type="text" placeholder="TITLE" onChange={function(e){
        const valve = e.target.value;
        setTitle(e.target.value);
    }}></input> <br />
    <input style={{
        padding:10,
        margin:10
    }} type="text" placeholder="DESCRIPTION" onChange={function(e){
        const valve = e.target.value;
        setDescription(e.target.value);
    }}></input> <br />

    <button onClick={() => {
        fetch("http://localhost:3001/todo", {
            method:"POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers:{
                   "content-type": "application/json"
            } 
        })
        .then(async function(res){
            const json = await res.json()
            alert("TODO ADDeD")
        })
    }}>ADD TODO</button>
    </div>
}
