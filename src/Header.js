import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img 
            className="header__logo"
            src='https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png' 
            alt="amazon logo" 
        />

        <div className='header__search'>
            <input 
                className='header__searchInput'
                type='text' 
            />
            <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__option--lineOne'>
                    Hello Guest
                </span>
                <span className='header__option--lineTwo'>
                    Sign In
                </span>
            </div>
            <div className='header__option'>
            <span className='header__option--lineOne'>
                    Returns
                </span>
                <span className='header__option--lineTwo'>
                    & Orders
                </span> 
            </div>
            <div className='header__option'>
            <span className='header__option--lineOne'>
                    Your
                </span>
                <span className='header__option--lineTwo'>
                    Prime
                </span>
                
            </div>
            <div className='header__option--basket'>
                <ShoppingBasketIcon />
                <span className='header__option--lineTwo header__basketCount'>
                    0
                </span>
            </div>

        </div>

    </div>
  )
}

export default Header;