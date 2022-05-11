import React from 'react'
import "./Home.css"
import { Product } from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src="https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg" 
          alt='background'
        />
        <div className='home__row'>
          <Product
            id= '1' 
            title="Nintendo Switch – OLED Model w/ White Joy-Con" 
            price={32.99}
            image="https://m.media-amazon.com/images/I/51YLbkYOhlL._AC_UL320_.jpg"
            rating={4}
          />
          <Product 
            id= '2'
            title="Xbox Core Wireless Controller – Shock Blue" 
            price={58.12}
            image="https://m.media-amazon.com/images/I/51v0T9+NgdL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id= '3' 
            title="Gaming Headset for PS4 PS5 Xbox One Switch PC with Noise Canceling Mic, Deep Bass Stereo Sound" 
            price={21.99}
            image="https://m.media-amazon.com/images/I/71wXQyxCENL._AC_UY218_.jpg"
            rating={5}
          />
          
        </div>

        <div className='home__row'>
        <Product 
          id= '4'
            title="Pokémon Assorted Cards, 50 Pieces" 
            price={16.99}
            image="https://m.media-amazon.com/images/I/61VJWSztDcL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id= '5' 
            title="Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys - Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned" 
            price={23.99}
            image="https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_SL1023_.jpg"
            rating={2}
          />
        </div>

        <div className='home__row'>
        <Product 
            id= '6'
            title="ID IDAODAN Portable Dual Nozzle Rose Red 110V 600W Electric Balloon Blower Pump/Electric Balloon Inflator for" 
            price={3.99}
            image="https://m.media-amazon.com/images/I/71ftcdoxhFL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home