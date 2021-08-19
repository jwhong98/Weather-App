import React, {useState} from 'react';
import WeatherSection from '../WeatherSection';
import { Nav, NavbarContainer, NavLogo, NavForm, SearchBar, NavBtn } from './NavbarElements';

const Navbar = () => {

    const [city, setCity] = useState('');
    const [section, setSection] = useState(null);  
    let textInput = React.createRef();

    const handleClick = (e) => {
        e.preventDefault();
        setSection(<WeatherSection city={city}/>);
    }

    return (
        <React.StrictMode>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Weather
                </NavLogo>
                <NavForm>
                    <SearchBar type="text" onChange={event => setCity(event.target.value)} placeholder="Search City"/>
                    <NavBtn type="submit" onClick={handleClick}>
                        Search
                    </NavBtn> 
                </NavForm>
            </NavbarContainer>
        </Nav>
        {section}
        </React.StrictMode>
    )
}

export default Navbar;
