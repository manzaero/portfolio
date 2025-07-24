import styled from "styled-components";

const HeaderContainer = ({className}) => {
    return (
        <div className={className}>

        </div>
    )
}

export const Header = styled(HeaderContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-top: 25px;
    border-bottom: 1px solid #46A35880;
    padding-bottom: 25px;
    width: 100%;
`