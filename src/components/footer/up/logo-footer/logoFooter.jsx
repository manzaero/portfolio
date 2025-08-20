import {Link} from "react-router-dom";
import styled from "styled-components";

const UpLogoContainer = ({className}) => (
    <Link to='/' className={className}>
        <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt=""/>
    </Link>
)

export const UpLogo = styled(UpLogoContainer)`
    display: flex;
    align-items: center;
    height: 100%;
    img {
        height: 100%;
        width: auto;
        display: block;
        transition: filter 0.9s ease, transform 0.9s ease;

        &:hover {
            filter: sepia(90%) hue-rotate(300deg) brightness(89%) contrast(110%);
        }
    }
`