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
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-top: 25px;
    padding-bottom: 25px;
    width: 100%;
`