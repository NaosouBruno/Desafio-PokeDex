import Ellipse from '../svg/Ellipse'
import Substract from '../svg/Substract'
import SubstractTwo from '../svg/SubstractTwo'
import './button.scss'

export default function button() {
    return (
        <section>
            <div className='btnContainer'>
                <div className="btn">
                    <Ellipse />
                    <Substract />
                </div>
            </div>
            <div className='btnContainer'>
                <div className="btn__card">
                    <SubstractTwo />
                </div>
            </div>
        </section>

    )
}