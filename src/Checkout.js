import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            { /* <img className='checkout__ad' src="#" alt="add" /> */ }
            <div>
                <h2 className='checkout__title'>
                    Your shopping Basket
                </h2>
                <h5>item</h5>
                <h5>item</h5>
                <h5>item</h5>
                <h5>item</h5>
                <h5>item</h5>
            </div>
        </div>
        <div className='checkout__right'>
            <h2>Subtotal here</h2>
        </div>
    </div>
  )
}

export default Checkout