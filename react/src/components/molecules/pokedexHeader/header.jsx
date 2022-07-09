import Back from "/assets/img/back.png";
import ListIcon from "/assets/img/list.png";

import "./header.scss";
export default function headerPokedex() {
  return (
    <section>
      <div className="header">
        <img src={Back} />
        <img src={ListIcon} />
      </div>
      <h1>POKEDEX</h1>
    </section>
  );
}
