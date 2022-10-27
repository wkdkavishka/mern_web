
import { useState } from "react"


const NoteNew = () => {
    const [name, setname] = useState("")
    const [user, setuser] = useState("")
    const [content, setcontent] = useState("")

    const [error, seterror] = useState(null) 
    const [response, setresponse] = useState(null) 


    const handlesubmit = async(e) => {
        //e.preventDefault() // default method is to reload the page

        const note = {name, user, content}

        fetch("/express_api/",{
            method:"POST",
            body:JSON.stringify(note),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log("new note - data --> ", data) // just for testing  #############################
            setresponse(data) // for a alert 
        })
        .catch((error) => {
            console.log("fetch - error --> ",error.message);
            seterror(error);
          })
    }

    return(
        <form className="create"  onSubmit={handlesubmit}>
            <h3>New Note</h3>

            <label>Note Name:</label>
            <input 
                type="text"
                onChange={ (e)=> setname(e.target.value) }
                value={name}
            />

            <label>user Name:</label>
            <input 
                type="text"
                onChange={ (e)=> setuser(e.target.value) }
                value={user}
            />

            <label>Content:</label>
            <textarea
                onChange={ (e)=> setcontent(e.target.value) }
                value={content}
                rows={1}
                //cols={2}
            />

            <button>Add Note</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NoteNew;