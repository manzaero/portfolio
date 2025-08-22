import {Link} from "react-router-dom";
import styled from "styled-components";

const LogoContainer = ({className}) => (
    <Link to='/' className={className}>
        <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt=""/>
    </Link>
)

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;
    height: 80%;
    img {
        height: 80%;
        width: auto;
        display: block;
        transition: filter 0.9s ease, transform 0.9s ease;

        &:hover {
            filter: hue-rotate(60deg) brightness(1.3) saturate(1.5);
        }
    }
    @media (max-width: 1024px) {
        display: none;
    }
`