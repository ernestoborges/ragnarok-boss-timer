import "./styles.css"
import { MonsterList } from "../MonsterList/MonsterList";
import {AiOutlineSearch} from "react-icons/ai"
import {BsFilter} from "react-icons/bs"
import { useState, useContext, useEffect } from "react";

export function MonsterTab({ monsters, selectedTab }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [filterState, setFilterState] = useState(false);
  const [filters, setFilters] = useState(
      {
        mvp: false,
        boss: false
      }
    )


  function filterHanddler() {

    let filtered = monsters.filter(
      monster => {

        if(filters.boss){
          if(filters.mvp){
            if(monster.class !== "boss"){
              return false
            }
          } else {
            if(monster.class !== "boss" || monster.modes?.mvp){
              return false
            }
          }
        }

        if(filters.mvp){
          if(filters.boss){
            if(monster.class !== "boss"){
              return false
            }
          } else {
            if(!monster.modes?.mvp){
              return false
            }
          }
        }

        return monster.name.toLowerCase().includes(searchInputValue.toLowerCase())
      }
    )
    setFilteredMonsters(filtered)
  }

  function handdleFilterCheckboxes(filter, checked){
    setFilters(
      prev => (
        {
          ...prev,
          [filter]: checked 
        }
      )
    )
  }

  useEffect(()=>{
    filterHanddler()
  }, [searchInputValue, filters])

  return (
    <section className={selectedTab === "monsters" ? "" : "hidden"}>
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="input-container">
            <AiOutlineSearch />
            <input 
              placeholder="Search"
              value = {searchInputValue}
              onChange={
                (e)=> setSearchInputValue(e.target.value)
              }
            />
            <button onClick={()=>{setFilterState(!filterState)}}>
              <BsFilter />
            </button>
          </div>
          <div className= {filterState ? "filter-container" : "filter-container hidden"}>
            <label>
              <input
                type="checkbox"
                onChange={
                  (e) => handdleFilterCheckboxes("mvp", e.target.checked)
                }
              />
              <div className="custom-checkbox"></div>
              <span>MvP</span>
            </label>
            <label>
              <input 
                type="checkbox"
                onChange={
                  (e) => handdleFilterCheckboxes("boss", e.target.checked)
                }   
                />
              <div className="custom-checkbox"></div>
              <span>Mini Boss</span>
            </label>
          </div>
        </div>
      </div>
      <MonsterList monsters={filteredMonsters} />
    </section>
  );
}
