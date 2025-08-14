
import styled from "styled-components";
import {Up} from "./up/up";
import {Down} from "./down/down-footer";

const FooterContainer = ({className}) => {
    return (
        <div className={className}>
            <Up/>
            <div className='hr'></div>
            <Down/>
        </div>
    )
}
export const Footer = styled(FooterContainer)`
    padding-top: 100px;
    .hr {
        border: solid 1px #252633;
        margin: 25px 0;
    }
`