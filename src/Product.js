import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'

export const Product = ({id, title, image, price, rating}) => {
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
        <button>Add to basket</button>
    </div>
  )
}