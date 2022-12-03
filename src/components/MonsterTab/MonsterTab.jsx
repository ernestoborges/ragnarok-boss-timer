import "./styles.css"
import { MonsterList } from "../MonsterList/MonsterList";
import {AiOutlineSearch} from "react-icons/ai"
import {BsFilter} from "react-icons/bs"
import { useState, useContext } from "react";

export function MonsterTab({ monsters, selectedTab }) {
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  return (
    <section className={selectedTab === "monsters" ? "" : "hidden"}>
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="input-container">
            <AiOutlineSearch />
            <input 
              placeholder="Search" 
              onChange={
                (e)=> setFilteredMonsters(
                  monsters.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))
                )
              }
            />
            <button>
              <BsFilter />
            </button>
          </div>
          <div className="filter-container">
            <label>
              <input type="checkbox"/>
              Mvp only
            </label>
          </div>
        </div>
      </div>
      <MonsterList monsters={filteredMonsters} />
    </section>
  );
}
