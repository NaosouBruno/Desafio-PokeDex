import burguerItens from "../../../data/burguerItens.json";
export default function burguerContent(props) {
  return (
    <section>
      {burguerItens.map((item) => (
        <div key={item.id}>
          <button>
            {item.title}
            <span>
              {" "}
              <img src={item.img} />
            </span>
          </button>
        </div>
      ))}
    </section>
  );
}
