import burguerItens from "../../../data/burguerItens.json";
import "../navegation/nav.scss";

export default function Nav(props) {
    return (
        <section className="nav">
             {burguerItens.map((item) => (

            <div key={item.id} className="nav__content">
                    <ul className="nav__list">
                        {item.title}                   
                    </ul>
            </div>
             ))}
        </section>
    )
}