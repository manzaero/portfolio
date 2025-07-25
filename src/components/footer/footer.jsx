
import styled from "styled-components";
import {Up} from "./up/up";

const FooterContainer = ({className}) => {
    return (
        <div className={className}>
            <Up/>
            {/*<Down/>*/}
        </div>
    )
}
export const Footer = styled(FooterContainer)`
    
`