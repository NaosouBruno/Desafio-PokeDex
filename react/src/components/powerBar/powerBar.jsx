export default function powerBar(props) {
  return (
    <div className="base-container">
      <p className="base-title">{props.title}</p>
      <span className="base-powerQuant">{props.powerQuant}</span>
      <div className="base-bar">
        <div
          className="base-powerBar"
          style={`width=${props.powerQuant} background=${props.color}`}
        ></div>
      </div>
    </div>
  );
}
