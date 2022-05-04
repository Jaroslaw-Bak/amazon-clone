import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'
import { useStateValue } from "./StateProvider"
import { PriceChange } from '@mui/icons-material';

export const Product = ({id, title, image, price, rating}) => {
    const [{ basket }, dispatch ] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO__BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>*</p>
                ))}
            </div>
        </div>
        <img
            src={image}
            alt='product img'
        />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}
