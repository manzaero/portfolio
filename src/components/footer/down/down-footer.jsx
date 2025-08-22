import styled from "styled-components";
import {Links} from "../../header";
import {Author} from "./author/author";

const DownFooter = ({className}) => {
    return (
        <div className={className}>
            <Links/>
            <Author/>
        </div>
    )
}
export const Down = styled(DownFooter)`
    display: flex;
    justify-content: space-around;
    margin-bottom: 36px;
    align-items: center;
    @media (max-width: 1400px) {
        display: flex;
        flex-direction: column;
    }
`