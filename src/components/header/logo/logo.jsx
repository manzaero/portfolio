import {Link} from "react-router-dom";
import styled from "styled-components";

const LogoContainer = ({className}) => (
    <Link to='/' className={className}>
        <img src="../../../assets/logo.svg" alt=""/>
    </Link>
)

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;
    height: 100%;
    @media (max-width: 768px){
    display: none;
}
`