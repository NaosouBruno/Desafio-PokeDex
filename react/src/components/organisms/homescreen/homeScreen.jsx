import Search from "../../atoms/input/input";
import Button from "../../molecules/button/button";

import "../homescreen/homescreen.scss";

export default function Homescreen() {
  return (
    <section className="home">
      <h1 className="home__title">What Pokemon are you looking for?</h1>
      <Search />
      <Button />
    </section>
  );
}
