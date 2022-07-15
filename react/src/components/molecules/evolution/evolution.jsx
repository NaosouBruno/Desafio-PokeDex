import "./evolution.scss";
import PokeEvo from "../../../../public/svg/pokeEvo.jsx";
import Bulba from "/assets/img/bulba.png";
export default function Evolution() {
  return (
    <div>
      <h1>Evolution Chain</h1>
      <PokeEvo />
      <img src={Bulba} />
    </div>
  );
}
