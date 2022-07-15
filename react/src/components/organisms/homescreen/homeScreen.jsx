import Search from "../../atoms/input/input";
import Button from "../../molecules/button/button";
import bigStract from "../../../../public/svg/bigStract.svg";
import "./homescreen.scss";

export default function Homescreen() {
  return (
    <section className="home">
      <div className="home__containerIcon">
        <img src={bigStract} className="home-icon" />
      </div>

      <h1 className="home__title">What Pokemon are you looking for?</h1>
      <Search />
      <Button />
    </section>
  );
}
