import OfficeAddress from "./OfficeAddress";
import ContractEmployee from "./Contract-Employee";
import Employee from "./Employee";
import CourierCompany from "./CourierCompany";
import { useState } from "react";
import { GiftsContext } from "./store/GiftsContext";

export default function Office() {
    const [gifts, setGifts] = useState([]);

    function sendGifts(event) {
        setGifts([event.target.id]);
    }

    return (
        <div>
            <h2>Office 
                <span> <button onClick={sendGifts} id="Gift"> Send Gift </button> </span> 
                <span> <button onClick={sendGifts} id="Laptop"> Send Laptop </button> </span>
                <span> <button onClick={sendGifts} id="Biriyani"> Send Biriyani </button> </span>
            </h2>
            <GiftsContext.Provider value={gifts} >
                <Employee />
                <ContractEmployee />
                <OfficeAddress />
                <CourierCompany />
            </GiftsContext.Provider>
        </div>

    );
}