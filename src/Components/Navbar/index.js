import React from 'react';
import { Nav, NavbarContainer, NavLogo, SearchBar, NavBtn } from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    Weather
                </NavLogo>
                <SearchBar name="cityName"/>
                <NavBtn>
                    Search
                </NavBtn> 
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
