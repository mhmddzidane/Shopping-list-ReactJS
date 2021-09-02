import style from './empty.module.css'
import trash from '../../assets/kisspng-rubbish-bins-waste-paper-baskets-computer-icons-trash-bin-svg-png-icon-free-download-175634-o-5b6db78aed69d4.5623885215339170669725.png'

const Empty = () => {
    return(
        <div>
            <p className={style.p}>Your List is Empty</p>
            <img src={trash} className={style.gambar}></img>
        </div>
    )
}

export default Empty