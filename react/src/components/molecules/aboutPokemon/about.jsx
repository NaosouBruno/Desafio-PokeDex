import HeaderPokedex from "../pokedexHeader/header";
import Substract from "../../../../public/svg/BigSubstract";
import BigBulba from "/assets/img/bigBulba.png";
import Back from "/assets/img/backBranco.png";
import Love from "/assets/img/love.png";
import Male from "/assets/img/male.png";
import Female from "/assets/img/female.png";
import Location from "/assets/img/pokeLocal.png";
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
          <p className="about-info">
            Bulbasaur can be seen napping in bright sunlight. There is a seed on
            its back. By soaking up the sun's rays, the seed grows progressively
            larger.
          </p>
        </div>

        <div className="about-card">
          <div>
            <p className="about-personalTitles">Height</p>
            <span className="about-pokePersonal">2'3.6" (0.70cm)</span>
          </div>
          <div>
            <p className="about-personalTitles">Weight</p>
            <span className="about-pokePersonal">15.2 lbs(6.9kg)</span>
          </div>
        </div>

        <div className="about-pokeSpecies">
          <h3 className="about-speciesTitle">Breeding</h3>
          <div className="about-speciesGroup">
            <p className="about-speciesItems">Gender</p>
            <div className="about-genderMale">
              <img src={Male} />
              <span>87.5%</span>
            </div>
            <div>
              <img src={Female} />
              <span>12.5%</span>
            </div>
          </div>
          <div className="about-speciesGroup">
            <p className="about-speciesItems">Egg Groups</p>
            <span>Monter</span>
          </div>
          <div className="about-speciesGroup">
            <p className="about-speciesItems">Egg Cycle</p>
            <span>Grass</span>
          </div>
        </div>

        <div className="about-location">
          <h3 className="about-speciesTitle">Location</h3>
        </div>
        <div className="about-training">
          <h3 className="about-speciesTitle">Training</h3>
          <img className="about-pokeLocal" src={Location} />
        </div>
      </div>
    </section>
  );
}
