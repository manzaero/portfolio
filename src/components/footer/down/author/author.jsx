import styled from "styled-components";

const AuthorContainer = ({className}) => {
    return (
        <div className={className}>
            Designed and built by <span>Pavan MG</span> with <span>Love & Coffee</span>
        </div>
    )
}

export const Author = styled(AuthorContainer)`
    font-size: 18px;
    span:first-child {
        font-weight: 600;
        background: linear-gradient(90deg, #7b61ff, #dd16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    span:last-child {
        font-weight: 600;
        background: linear-gradient(90deg, #c52dd8 , #e91ed9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`