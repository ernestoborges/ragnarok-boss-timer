export function Popup({closePopup}){
    return <div className="popup-container">
        <div className="popup-box">
            test
            <button onClick={closePopup}>close</button>
        </div>
    </div>
}