import { burguerAction } from "../../../services/ui-burguer";
import { useDispatch } from "react-redux";
export default function burguerMenu() {
  const dispath = useDispatch();
  const toggleBurguerHandler = () => {
    dispath(burguerAction.toggle());
  };
  return (
    <button onClick={toggleBurguerHandler}>
      <span>Burguer Menu</span>
    </button>
  );
}
