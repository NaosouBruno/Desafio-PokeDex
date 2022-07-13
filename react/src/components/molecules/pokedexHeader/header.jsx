import { Link } from "react-router-dom";
import "./header.scss";
export default function headerPokedex(props) {
  return (
    <section>
      <div className="header">
        <Link to="/">
          <img className="header-icon" src={props.leftImg} />
        </Link>

        <img className="header-icon" src={props.hightImg} />
      </div>
      <div className="header-pokeInfo">
        <h2 className={`header-title ${props.classTitle}`}>{props.title}</h2>
        <h2 className={props.classId}>#{props.id}</h2>
      </div>
    </section>
  );
}
