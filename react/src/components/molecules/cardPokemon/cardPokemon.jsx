export default function listPokedex(props) {
  return (
    <section>
      <h1>Card</h1>
      {props.dados.map((dado) => (
        <div key={dado.id}>
          <section>
            <h2>{dado.name}</h2>
            <span>{dado.type}</span>
          </section>
          <img src={dado.img} />
        </div>
      ))}
    </section>
  );
}
