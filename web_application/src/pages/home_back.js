// imports
import { useEffect, useState } from "react"

const Home = () => {
    const [ notes, setnotes ] = useState(null)

    useEffect(
        () => {
            const fetchnotes = async () => {
                const response = await fetch( "/express_api" ).then(res => console.log("res --> ",res))
                const json = await response.json() // de json responce ffron the server to an array

                if(response.ok){ setnotes(json) }
            }

            fetchnotes()
        },
        [] // empty array
    )

    if(notes){
        return(<div>
            notes true
            {}
        </div>)
    }else{
        return(<div>
            notes false
        </div>)
    }
    return(
        <div className="Home">
            <div className="notes">
                {notes && notes.map(
                        (note) => (
                            note.name
                        )
                    )
                }                
            </div>
        </div>
    )
}


export default Home


/*


if(notes){
                    notes.map( (note) => (
                            <p key={note._id}>{note.name}</p>
                        ) 
                    )
                }


*/
