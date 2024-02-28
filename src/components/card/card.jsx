import '../card/card.css'
import binDark from '../catalog/imgCatalog/binDark.png'
import darkLike from '../catalog/imgCatalog/darkLike.png'
import { Link } from 'react-router-dom'

export default function Card({ name, price, id, img }) {
    return (
        <div className="element">
            <img src={img} alt="" className='catalog' />
            <h2 className="catalog-title">{name}</h2>
            <div className="catalog-btn">
                <h2 className="price">{price}</h2>
                <div className="btn-form">
                    <img src={darkLike} alt="cat" />
                    <img src={binDark} alt="cat" />
                </div>
            </div>
            <Link to={`${id}`}>Подробнее</Link>
        </div>
    )
}