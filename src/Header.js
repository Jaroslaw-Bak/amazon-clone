import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()

        }
    }

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
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__option--lineOne'>
                        {user ? `Hello ${user._delegate.email}` : 'Hello Guest'}
                    </span>
                    <span className='header__option--lineTwo'>
                        {user ? 'SignOut' : 'SignIn'}
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