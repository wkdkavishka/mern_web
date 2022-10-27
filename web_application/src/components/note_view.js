import { useState } from "react"

const NoteView = ({note}) => { // {notes} // deconstruct
    var name = note.name;
    var user = note.user;
    var content = note.content;

    //const [response, setresponse] = useState(null)

    const delete_note = async() => {
        await fetch("/express_api/"+note._id, {
            method:"DELETE"
        })
        .then((data) =>{
            return data.json()
        })
        .then((data) => {
            console.log("delete - data --> ", data) // just for testing  #############################
            //setresponse(data)
        })
        .catch((error) =>{
            console.log("fetch - error --> ",error.message);
        })
        await window.location.reload();
    }

    const update_note = async() => {
        const new_note = {name, user, content}

        await fetch("/express_api/"+note._id, {
            method:"PATCH",
            body:JSON.stringify(new_note),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((data) =>{
            return data.json()
        })
        .then((data) => {
            console.log("update - data --> ", data) // just for testing  #############################
            //setresponse(data)
        })
        .catch((error) =>{
            console.log("fetch - error --> ",error.message);
        })
        await window.location.reload();
    }

    return (
        <div className="note-details">
            <h4><strong>{note.name}</strong></h4>
            <input 
                type="text"
                onChange={(e)=>(content = e.target.value)}
                //value={note.content}
                defaultValue={content}
            />
            <button onClick={delete_note}>Delete</button>
            <button onClick={update_note}>Update</button>
        </div>
    )
}


export default NoteView 


// <span onClick={delete_note}>Delete</span>