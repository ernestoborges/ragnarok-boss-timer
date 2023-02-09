import "./styles.css";
import { useEffect, useState, useContext } from "react";
import SelectedMonstersContext from "../../context/SelectedMonstersProvider";
import TimeContext from "../../context/TimeProvider";
import { Popup } from "./Popup";
import { BsHourglass } from "react-icons/bs"

export function MonsterItem({ boss }) {
  const [respawn, setRespawn] = useState({respawnMap:"", respawnTime:0});

  const timer = useContext(TimeContext).timer;
  const setSelectedMonsters = useContext(SelectedMonstersContext).setSelectedMonsters

  const [popupOn, setPopupOn] = useState(false)

  function openPopup(){
    setPopupOn(true);
  }
  
  function closePopup(){
    setPopupOn(false);
  }

  function convertTime(time) {
    return new Date(Number(time)).toISOString().slice(11, 19);
  }

  function handdleSelectedMonsters(startedAt){
   
    setSelectedMonsters((prev)=>
      [
        ...prev,
        {
          index: prev.length === 0 ? 0 : prev[prev.length-1].index + 1,
          data: boss,
          respawnMap: respawn.respawnMap,
          respawnTime: respawn.respawnTime,
          startedAt: startedAt
        }
      ]
    )
  }

  useEffect(() => {
    setRespawn(
      {
        respawnMap: boss.spawn_maps[0].mapname, 
        respawnTime: boss.spawn_maps[0].respawnTime
      }
    );
  }, [boss]);

  return (
    <li>
      <div className={`img-container ${boss.class === "boss" ? boss.modes?.mvp ? "mvp-canvas" : "boss-canvas" : ""}`}>
        <img
          src={`https://rockragnarok.com/edda/data/monsters/${boss.id}.gif`}
          alt=""
        />
      </div>
      <div>
        <div className="name-container">
          <p className="monster-name">{boss.name}</p>
          <p className="monster-id"><span>ID:</span>{boss.id}</p>
          <p><span>Respawn:</span>{convertTime(respawn.respawnTime)}</p>
        </div>
        <div className="select-container">
          <select
            onChange={(e) => 
              setRespawn(JSON.parse(e.target.value))
            }
          >
            {boss.spawn_maps.map((map, index) => (
              <option
                key={index} 
                value={
                  JSON.stringify(
                    {
                      respawnMap: map.mapname, 
                      respawnTime: map.respawnTime
                    }
                  )
                }>
              {map.mapname}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="button-container">
        <button 
          onClick={()=>{
            handdleSelectedMonsters(timer)
          }}
        >
          Add</button>
        <button 
          onClick={openPopup}
        >Custom</button>
      </div>
      {popupOn && <Popup closePopup={closePopup} handdleSelectedMonsters={handdleSelectedMonsters} />}
    </li>
  );
}
