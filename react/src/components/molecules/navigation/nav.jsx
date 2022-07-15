import burguerItens from "../../../data/burguerItens.json";
import "./nav.scss";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <section className="nav">
      {burguerItens.map((item) => (
        <div key={item.id} className="nav__content">
          <ul className="nav__list">
            <Link to={"/"}> {item.title}</Link>
          </ul>
        </div>
      ))}
    </section>
  );
}
