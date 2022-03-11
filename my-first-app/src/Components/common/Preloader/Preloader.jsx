import preloader from '../../../assets/images/preloader.gif'
import s from './Preloader.module.css'


const Preloader = (props) => {
    return (
    <div className={s.preloader}>
        <img src={preloader} />
    </div>
    )
}

export default Preloader