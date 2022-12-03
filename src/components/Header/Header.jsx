import { RealTimeClock } from "./Clock";
import "./styles.css";

export function Header() {
  return (
    <>
      <header>
        <span>RAGNAROK</span>
        <RealTimeClock />
        <span>MVP TIMER</span>
      </header>
    </>
  );
}
