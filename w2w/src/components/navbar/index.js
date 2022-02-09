import React from 'react';
import SearchBar from '../search/search';
import { Nav, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <SearchBar />
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;

