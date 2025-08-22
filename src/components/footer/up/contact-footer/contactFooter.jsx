import {NavLink} from "react-router-dom";
import styled from "styled-components";

const contactContainer = ({className}) => {
    return (
        <div className={className}>
            <ul>
                <li><NavLink to='#' className={className}>+7 991 558 32 10</NavLink></li>
                <li><NavLink to='#' className={className}>ligoero@gmail.com</NavLink></li>
            </ul>
        </div>
    )
}
export const Contact = styled(contactContainer)`
    ul {
        font-size: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
        color: black;
        transition: color 0.3s ease;

        &:hover {
            color: #a6f6f6 !important;
        }

        &.active {
            color: #A7A7A7;
        }

        &.active:hover {
            color: #a6f6f6;
        }
    }
    @media (max-width: 480px){
         ul {
             display: flex;
             flex-direction: column;
         }
    }
`