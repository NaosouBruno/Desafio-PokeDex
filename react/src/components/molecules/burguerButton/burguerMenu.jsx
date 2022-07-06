import { burguerAction } from "../../../services/ui-burguer";
import { useDispatch } from "react-redux";

import burguerIcon from "/assets/img/burguerIcon.png";

import "./burguerButton.scss";

export default function burguerMenu() {
  const dispath = useDispatch();
  const toggleBurguerHandler = () => {
    dispath(burguerAction.toggle());
  };
  return (
    <button onClick={toggleBurguerHandler} className="burguer">
      <span>
        <img src={burguerIcon} />
      </span>
    </button>
  );
}
