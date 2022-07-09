import "./header.scss";
export default function headerPokedex(props) {
  return (
    <section>
      <div className="header">
        <img className="header-icon" src={props.leftImg} />
        <img className="header-icon" src={props.hightImg} />
      </div>
      <h2 className="header-title">{props.title}</h2>
    </section>
  );
}
