import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
  const [{ basket, loggedinuser }, dispatch] = useStateValue()
  const logoutUser = () => {
    if (loggedinuser) {
      auth.signOut()
    }
  }
  return (
    <nav className='header'>
      <img
        className='header__logo'
        src='https://i0.wp.com/infoware.site/wp-content/uploads/2020/07/cropped-Infoware-Logo-07-07-07-3.png?w=1351&ssl=1'
        alt='logo'
      />
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!loggedinuser && '/login'} className='header__link'>
          <div className='header__option' onClick={logoutUser}>
            <span className='header__optionLineOne'>
              Hello , {loggedinuser?.email}
            </span>
            <span className='header__optionLineTwo'>
              {loggedinuser ? 'Signout' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Return</span>
            <span className='header__optionLineTwo'>Home</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Products</span>
          </div>
        </Link>
      </div>
      <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header__productCount'>2</span>
        </div>
      </Link>
    </nav>
  )
}

export default Header
