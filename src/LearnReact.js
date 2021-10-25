import React, { useState } from "react";
import Participants from "./Participants";

function LearnReact() {

    const [data, setData] = React.useState(
        {
            framework: 'ReactJS',
            language: 'JS',
            participants: ["Suhail", "Farooq", "Reddy Basha", "Mehboob"]
        }
    );

    const [showParticipants, setShowParticipants] = React.useState(true);

    function handleClick(event) {
        // setData({ ...data, language: "TypeScript", participants: [...data.participants, "Arshad"] });
        setShowParticipants(!showParticipants);
    }

    return (
        <div className="App">
            <h2> Hello we are learning {data.framework} in language {data.language}</h2>
            {
                showParticipants ? <Participants students={data.participants} /> : ""
            }
            <button onClick={handleClick} style={{ backgroundColor: "green", padding: 5, width: 300, color: "white" }}> Show / Hide </button>
        </div>
    );
}

export default LearnReact;