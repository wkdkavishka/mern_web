// imports
import { useEffect, useState } from "react"

// components
import NoteView from "../components/notte_view";


const Home = () => {
    const [ notes, setnotes ] = useState(null)
    //var notes = null // 

    useEffect(() => {
        fetch("express_api/")
          .then((response) => {
            if(!response){ // if no respnse
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            return response.json();
          })
          .then((actualData) => {
            console.log("data --> ", actualData)
            setnotes(actualData) // transport data
          })
          .catch((error) => {
            console.log("error --> ",error.message);
          });
    },
    []);
    
    return(
        <div className="Home">
            <div className="notes">
                {notes && notes.map((note) => (
                            <NoteView key={note._id} note={note}/>
                        )
                    )
                }                
            </div>
        </div>
    )

}


export default Home

