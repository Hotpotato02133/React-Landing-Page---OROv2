import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    CustomNavLink
 } from './StyledNavbar'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);
    const [storeClick, setStoreClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
        setStoreClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
        setStoreClick(false);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
        setStoreClick(false);
    }

    const handleStoreClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(false);
        setStoreClick(true);

    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        {/* <NavIcon /> */}
                            ORO
                    </NavLogo>
                    <HamburgerIcon primary onClick={handleClick}>
                        { click ? <FaTimes style={{ color: '#303030'}}/> : <FaBars style={{ color: '#303030'}} />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>

                        <NavItem onClick={handleServicesClick} servicesClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                About Us
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <CustomNavLink href='https://www.oro.com.ph/index/ORO_Gold_Card.html' target='_blank' onClick={closeMobileMenu}>
                                Gold Card
                            </CustomNavLink>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                Services
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleStoreClick} storeClick={storeClick}>
                            <NavLinks to='/store' onClick={closeMobileMenu}>
                                Stores
                            </NavLinks>
                        </NavItem>

                        {/* <NavItem onClick={handleContactClick} contactClick={contactClick}>
                            <NavLinks to='/contact' onClick={closeMobileMenu}>
                                Contacts
                            </NavLinks>
                        </NavItem> */}

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>My ORO App</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    );
}

export default Navbar;