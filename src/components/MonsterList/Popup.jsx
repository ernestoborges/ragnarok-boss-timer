import { useState } from "react"
import {BsCheckLg, BsXLg} from "react-icons/bs"

export function Popup({closePopup, handdleSelectedMonsters}){

    const [customTime, setCustomTime] = useState("");
    const [customDate, setCustomDate] = useState("");

    function handdleCustomTime() {
        let customResponse = new Date(`${customDate}T${customTime}:00`);
        handdleSelectedMonsters(customResponse)
        closePopup();
    }

    return <section className="popup-container">
        <article className="popup-box">
            <header>
                Custom Time of Death
            </header>
            <section>
                <label>
                    Time:
                    <input type="time" onChange={e => setCustomTime(e.target.value)}/>
                    {customTime ? <BsCheckLg className="bs-check" /> : <BsXLg className="bs-x" />} 
                </label>
                <label>
                    Date:
                    <input type="date" onChange={e => setCustomDate(e.target.value)}/>
                    {customDate ? <BsCheckLg className="bs-check" /> : <BsXLg className="bs-x" />}
                </label>
            </section>
            <section>
                <button className="cancel" onClick={closePopup}>cancel</button>
                <button 
                    className={`add ${!customDate || !customTime ? "disabled" : ""}`}
                    onClick={handdleCustomTime} 
                    disabled={!customDate || !customTime ? true : false}
                >add</button>
            </section>
        </article>
    </section>
}