import styled from "styled-components";
import {UpLogo, Contact, UpSocial} from "./index";

const UpContainer = ({className}) => {
    return (
        <div className={className}>
            <UpLogo/>
            <div className='right'>
                <Contact/>
                <UpSocial/>
            </div>
        </div>
    )
}
export const Up = styled(UpContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-top: 25px;
    width: 100%;
    .right {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    @media (max-width: 768px) {
        padding-bottom: 20px;
        .right {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }
    }
`