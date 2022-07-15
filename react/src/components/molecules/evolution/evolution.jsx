import "./evolution.scss";
import EvoIcon from "../../../../public/svg/evoIcon.svg";
import RightArrow from "/assets/img/rightArrow.png";
import Bulba from "/assets/img/bulba.png";
import Bulba2 from "../../../../public/svg/bulba2.svg";
import Bulba3 from "../../../../public/svg/bulba3.svg";
import Bulba4 from "../../../../public/svg/bulba4.svg";
export default function Evolution() {
  return (
    <div className="evolution">
      <h1 className="evolution-title">Evolution Chain</h1>
      <div className="evolution-container">
        <div className="evolution-faseOne">
          <img src={EvoIcon} className="evolution-pokeIcon" />
          <img src={Bulba} className="evolution-pokeSelf" />
        </div>
        <div className="evolution-containerLevel">
          <img src={RightArrow} />
          <span className="evolution-pokeLevel">Lvl 16</span>
        </div>
        <div className="evolution-faseOne">
          <img src={EvoIcon} className="evolution-pokeIcon" />
          <img src={Bulba2} className="evolution-pokeSelf" />
        </div>
      </div>
      <hr></hr>

      <div className="evolution-container">
        <div className="evolution-faseOne">
          <img src={EvoIcon} className="evolution-pokeIcon" />
          <img src={Bulba3} className="evolution-pokeSelf" />
        </div>
        <div className="evolution-containerLevel">
          <img src={RightArrow} />
          <span className="evolution-pokeLevel">Lvl 34</span>
        </div>
        <div className="evolution-faseOne">
          <img src={EvoIcon} className="evolution-pokeIcon" />
          <img src={Bulba4} className="evolution-pokeSelf" />
        </div>
      </div>
    </div>
  );
}
