import "./index.scss";
export default function listPokedex(props) {
  return (
    <section className="container">
      {props.dados.map((dado) => (
        <div className="container-card" key={dado.id}>
          <section>
            <h2>{dado.name}</h2>
            <span>{dado.type}</span>
          </section>
          <div>
            <img className="container-imgPoke" src={dado.img} />
          </div>
        </div>
      ))}
    </section>
  );
}
