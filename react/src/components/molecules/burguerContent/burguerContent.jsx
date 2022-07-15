import burguerItens from "../../../data/burguerItens.json";
import "./burguerContent.scss";
export default function burguerContent(props) {
  return (
    <section className="burguerContent">
      {burguerItens.map((item) => (
        <div key={item.id} className="burguerContent-contentItem">
          <button className="burguerContent-buttonContent">
            {item.title}
            <span>
              <img src={item.img} />
            </span>
          </button>
        </div>
      ))}
    </section>
  );
}
