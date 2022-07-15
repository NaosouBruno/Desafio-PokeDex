import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./input.scss";

export default function search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const getSearch = (event) => {
    event.preventDefault();
    if (search.trim().length > 0) {
      navigate(`/about/${search}`);
    } else {
      alert("Digite um nome para pokemon");
    }
  };
  const getName = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="pokeSearch">
      <form className="pokeSearch__container" onSubmit={getSearch}>
        <input
          className="pokeSearch__input"
          type="text"
          name="nome"
          placeholder="Search Pokemon, Move, Ability etc"
          value={search}
          onChange={getName}
        ></input>

        <img
          className="pokeSearch__searchIcon"
          src="/assets/img/search.png"
          alt="search icon"
        />
      </form>
    </div>
  );
}
