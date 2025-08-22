import styled from "styled-components";
import {Links, Logo, Social} from './index'

const HeaderContainer = ({className}) => {
    return (
        <div className={className}>
            <Logo/>
            <Links/>
            <Social/>
        </div>
    )
}

export const Header = styled(HeaderContainer)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 300px;
    box-sizing: border-box;

    background-color: #0d0d0d;
    z-index: 1000;

    @media (max-width: 1400px) {
        padding: 0 150px;
    }

    @media (max-width: 1024px) {
        padding: 0 60px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
    }
`;
