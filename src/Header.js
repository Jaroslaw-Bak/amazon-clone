import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket},dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to='/'>
        <img 
            className="header__logo"
            src='https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png' 
            alt="amazon logo" 
            />
        </Link>

        <div className='header__search'>
            <input 
                className='header__searchInput'
                type='text' 
            />
            <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <Link to='/login'>
                <div className='header__option'>
                    <span className='header__option--lineOne'>
                        Hello Guest
                    </span>
                    <span className='header__option--lineTwo'>
                        Sign In
                    </span>
                </div>
            </Link>
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
            <Link to="checkout">
                <div className='header__option--basket'>
                    <ShoppingBasketIcon />
                <span className='header__option--lineTwo header__basketCount'>
                    {basket?.length}
                </span>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Header;