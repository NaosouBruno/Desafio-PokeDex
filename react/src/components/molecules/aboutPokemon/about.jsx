import { useEffect, useState } from "react";
import getPokemon from "../../../services/getPokemon";
import { useParams, Link } from "react-router-dom";

import HeaderPokedex from "../pokedexHeader/header";
import Substract from "../../../../public/svg/BigSubstract";

import Back from "/assets/img/backBranco.png";
import Love from "/assets/img/love.png";
import Male from "/assets/img/male.png";
import Female from "/assets/img/Female.png";
import Location from "/assets/img/pokeLocal.png";

import "./about.scss";
export default function aboutPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const pokes = await getPokemon(id);
      setPokemon(pokes);
      console.log(pokes[0].data.id);
    };
    fetch();
  }, []);

  const convertHeight = (height) => {
    const cm = height / 100;

    return cm + "cm";
  };
  const convertWeight = (weight) => {
    const kg = weight / 10;

    return kg + "kg";
  };
  const pokeHeader = pokemon.map((poke) => (
    <div key={poke.data.id}>
      <HeaderPokedex
        leftImg={Back}
        hightImg={Love}
        title={poke.data.name}
        classTitle="about-pokeName"
        id={poke.data.id}
        classId={"about-pokeId"}
      />
      <div className="about-subInfo">
        <div className="about-pokeType">
          {poke.data.types.map((tipo) => (
            <span className="about-typeName" key={tipo.type.name}>
              {tipo.type.name}
            </span>
          ))}
        </div>
        <span className="about-subTitle">Seed Pokemon</span>
      </div>

      <div className="about-pokeIcon">
        <Substract className="about-pokebollIcon" />
        <img
          className="about-pokeSelf"
          src={poke.data.sprites.other["official-artwork"].front_default}
        />
      </div>
    </div>
  ));

  const pokeFooter = pokemon.map((poke) => (
    <div key={poke.data.id}>
      <p className="about-info">
        {poke.data.name} can be seen napping in bright sunlight. There is a seed
        on its back. By soaking up the sun's rays, the seed grows progressively
        larger.
      </p>
      <div className="about-card">
        <div className="about-position">
          <p className="about-personalTitles">Height</p>
          <span className="about-pokePersonal">
            {convertHeight(poke.data.height)}
          </span>
        </div>
        <div className="about-position">
          <p className="about-personalTitles">Weight</p>
          <span className="about-pokePersonal">
            {convertWeight(poke.data.weight)}
          </span>
        </div>
      </div>
    </div>
  ));
  const pokeInfo = pokemon.map((poke) => (
    <div className="about-pokeSpecies" key={poke.data.id}>
      <h3 className="about-speciesTitle">Breeding</h3>
      <div className="about-speciesGroup">
        <p className="about-speciesItems">Gender</p>
        <div className="about-genderMale">
          <img src={Male} />
          <span className="about-pokeInfo--gender">87.5%</span>
        </div>
        <div>
          <img src={Female} />
          <span className="about-pokeInfo--gender">12.5%</span>
        </div>
      </div>
      <div className="about-speciesGroup">
        <p className="about-speciesItems">Egg Groups</p>
        <span className="about-pokeInfo">{poke.eggGroup.name}</span>
      </div>
      <div className="about-speciesGroup">
        <p className="about-speciesItems">Egg Cycle</p>
        <span className="about-pokeInfo">{poke.data.types[0].type.name}</span>
      </div>
    </div>
  ));

  const mapedExp = pokemon.map((poke) => (
    <div className="about-training" key={poke.data.id}>
      <h3 className="about-speciesTitle">Training</h3>
      <div className="about-trainingInfo">
        <p className="about-speciesItems">Base EXP</p>
        <span className="about-pokeInfo">{poke.data.base_experience}</span>
      </div>
    </div>
  ));

  const navMaped = pokemon.map((poke) => (
    <div className="about-nav" key={poke.data.id}>
      <span className="about-navItem">About</span>
      <Link to={`/baseStats/${poke.data.id}`}>
        <span className="about-navItem">Base Stats</span>
      </Link>
      <Link to={"/evolution"}>
        <span className="about-navItem">Evolution</span>
      </Link>

      <span className="about-navItem">Moves</span>
    </div>
  ));
  return (
    <section className="about">
      {pokeHeader}
      <div className="about-footer">
        <div className="about-footerContainer">
          {navMaped}
          <hr></hr>
          {pokeFooter}
          {pokeInfo}
          <div className="about-location">
            <h3 className="about-speciesTitle">Location</h3>
            <img className="about-pokeLocal" src={Location} />
          </div>
          {mapedExp}
        </div>
      </div>
    </section>
  );
}
