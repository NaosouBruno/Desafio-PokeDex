import Ellipse from "../../../../public/svg/Ellipse";
import Substract from "/public/svg/Substract";
import { Link } from "react-router-dom";
import "./button.scss";

export default function button() {
  return (
    <section className="btnDirection">
      <div className="btnContainer">
        <div className=" btn btn--green">
          <Ellipse />
          <p className="btn__text">Pokedex</p>
          <Link to="/pokedex">
            <Substract />
          </Link>
        </div>
      </div>
      <div className="btnContainer">
        <div className=" btn btn--red">
          <Ellipse />
          <p className="btn__text">Moves</p>
          <Substract />
        </div>
      </div>
      <div className="btnContainer">
        <div className=" btn btn--blue">
          <Ellipse />
          <p className="btn__text">Abilities</p>
          <Substract />
        </div>
      </div>
      <div className="btnContainer">
        <div className=" btn btn--yellow">
          <Ellipse />
          <p className="btn__text">Items</p>
          <Substract />
        </div>
      </div>
      <div className="btnContainer">
        <div className=" btn btn--purple">
          <Ellipse />
          <p className="btn__text">Locations</p>
          <Substract />
        </div>
      </div>
      <div className="btnContainer">
        <div className=" btn btn--brown">
          <Ellipse />
          <p className="btn__text">Type Charts</p>
          <Substract />
        </div>
      </div>
    </section>
  );
}
