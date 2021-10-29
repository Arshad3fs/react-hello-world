import { useContext, useEffect, useState } from "react";
import { GiftsContext } from "./store/GiftsContext";

export default function EmployeeAddress(){

    const data = useContext(GiftsContext);

    const [gift, setGift] = useState("");

    useEffect(()=> {
        setGift(data ? data[0] : "");
    }, [data]);

    setTimeout(()=> {
        setGift("");
    }, 5000);

    return (
        <h2>
            Employee Address {
                gift ? <span> {gift} Received</span> : ""
            }            
        </h2>
    );
}