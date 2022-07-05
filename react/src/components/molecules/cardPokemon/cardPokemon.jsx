export default function listPokedex(props) {
  return (
    <section>
      <h1>Card</h1>
      {props.dados.map((dado) => (
        <div>
          <h2>{dado.name}</h2>
        </div>
      ))}
    </section>
  );
}
