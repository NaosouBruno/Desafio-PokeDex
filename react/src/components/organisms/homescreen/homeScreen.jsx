import Search from "../../input/input"
import Button from "../../atoms/button/button"
import '../homescreen/homescreen.scss'

export default function Homescreen() {
    return (
        <section className="home">
            <h1 className="home__title">
                What Pokemon are you looking for?
            </h1>
            <Search />
            <Button />
        </section>
    )
}