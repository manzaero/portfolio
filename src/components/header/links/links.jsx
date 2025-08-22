import {NavLink} from "react-router-dom";
import styled from "styled-components";

const LinksContainer = ({className}) => {
    return (
        <div className={className}>
            <ul>
                <li><NavLink to='/' className={({isActive})=> (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive})=> (isActive ? 'active' : '')}>About</NavLink></li>
                <li><NavLink to='/stack' className={({isActive})=> (isActive ? 'active' : '')}>Stack</NavLink></li>
                <li><NavLink to='/projects' className={({isActive})=> (isActive ? 'active' : '')}>Projects</NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=> (isActive ? 'active' : '')}>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export const Links = styled(LinksContainer)`
    margin: 0 5px;
    ul {
        font-size: 14px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        display: flex;
        justify-content: center;
    }

    a {
        font-weight: 600;
        text-decoration: none;
        color: #a7a7a7;
        transition: color 0.3s ease;

        &:hover {
            color: #a6f6f6 !important;
        }

        &.active {
            color: #e91ed9;
        }

        &.active:hover {
            color: #a6f6f6;
        }
    }
`;
