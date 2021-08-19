import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    background: grey;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
`

export const NavLogo = styled(Link)`
    text-decoration: none;
`

export const NavForm = styled.form`

`

export const SearchBar = styled.input`

`

export const NavBtn = styled.button`

`