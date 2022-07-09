import Back from "/assets/img/back.png";
import ListIcon from "/assets/img/list.png";

import "./header.scss";
export default function headerPokedex() {
  return (
    <section>
      <div className="header">
        <img className="header-icon" src={Back} />
        <img className="header-icon" src={ListIcon} />
      </div>
      <h2 className="header-title">Pokedex</h2>
    </section>
  );
}
