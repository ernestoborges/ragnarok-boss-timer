import "./styles.css";
export function TabSwitch({ tabs, selected, setSelectedTab }) {
  return (
    <>
      <ul className="tab-switch">
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={tab === selected ? "selected-tab" : ""}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </>
  );
}
