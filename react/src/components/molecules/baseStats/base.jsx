import "./base.scss";
import PowerBar from "../../powerBar/powerBar";
export default function baseStats() {
  return (
    <div className="base">
      <div className="base-container">
        <p className="base-title">HP</p>
        <span className="base-powerQuant">45</span>
        <div className="base-bar">
          <div className="base-powerBar"></div>
        </div>
      </div>
      {/* <PowerBar title="Attack" powerQuant="60" powerBar="base-powerBar--"/> */}
    </div>
  );
}
