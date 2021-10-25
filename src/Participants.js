import React from "react"

function Participants(props) {    
    
    return <div>
        <h2> People who are learning </h2>
        {
            props.students.map(student => {
                return <h2 key={student}>{student}</h2>
            })
        }
    </div>
}

export default Participants;