import { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Header = () => {
  const[menuOpened, setMenuOpened] = useState(false);
  //const headerColor = useHeaderColor()
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()


  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && '-100%'}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <Link to='/'>
            <img src="./LMlogo.png" alt="logo" width={100}/>
          </Link>
            
            <OutsideClickHandler 
            onOutsideClick={() => {
              setMenuOpened (false)
            }}
            >
              <div className="flexCenter h-menu" 
              style = {getMenuStyles(menuOpened)}
              >
                <NavLink to='/properties'>Properties</NavLink>
              
                
                <a href="mailto:sruthidasnalini@gmail.com">Contact</a>
                
                {/* Login Button */}

                

                  {!isAuthenticated ? (
                  <button className='button' onClick={() => loginWithRedirect()}>
                    Login
                  </button>
                   ) : ( 
                    <ProfileMenu user={user} logout={logout} />
                  )}

                
              </div>
            </OutsideClickHandler>

            {/* for hamburger menu */}
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
        </div>

        
    </section>
  )
}

export default Header