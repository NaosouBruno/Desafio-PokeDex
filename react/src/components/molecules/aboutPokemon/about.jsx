import HeaderPokedex from "../pokedexHeader/header";
import Substract from "../../../../public/svg/BigSubstract";
import BigBulba from "/assets/img/bigBulba.png";
import Back from "/assets/img/backBranco.png";
import Love from "/assets/img/love.png";

import "./about.scss";
export default function aboutPokemon() {
  return (
    <section className="about">
      <HeaderPokedex
        leftImg={Back}
        hightImg={Love}
        title={"Bulbasur"}
        classTitle="about-pokeName"
        id={"01"}
        classId={"about-pokeId"}
      />
      <div className="about-subInfo">
        <div className="about-pokeType">
          <span className="about-typeName">Grass</span>
          <span className="about-typeName">Poison</span>
          <span className="about-subTitle">Seed Pokemon</span>
        </div>
      </div>

      <div className="about-pokeIcon">
        <Substract className="about-pokebollIcon" />
        <img className="about-pokeSelf" src={BigBulba} />
      </div>

      <div className="about-footer">
        <div className="about-footerContainer">
          <div className="about-nav">
            <span className="about-navItem">About</span>
            <span className="about-navItem">Base Stats</span>
            <span className="about-navItem">Evolution</span>
            <span className="about-navItem">Moves</span>
          </div>
          <hr></hr>
          <p className="poke-info">
            Bulbasaur can be seen napping in bright sunlight. There is a seed on
            its back. By soaking up the sun's rays, the seed grows progressively
            larger.
          </p>
        </div>
      </div>
    </section>
  );
}
