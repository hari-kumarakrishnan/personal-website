import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 70px;
    display:flex;
    
    justify-content: space-between;
    padding: 0.5rem calc((100px) / 2);
    z-index: 10;
`;
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    background-color: black;
    align-items: center;
    padding: 0 2rem;
    text-decoration: none;
    font-size: 24px; 
    height: 100%;
    justify-content: right;
    cursor: pointer;

    &.active { 
        color: #15cdfc;
    }
`;
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }   
`;  

