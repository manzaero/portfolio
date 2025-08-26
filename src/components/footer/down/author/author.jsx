import styled from "styled-components";

const AuthorContainer = ({className}) => {
    return (
        <div className={className}>
            Designed and built by <span>ManRt</span> with <span>Love & movement</span> in 2025
        </div>
    )
}

export const Author = styled(AuthorContainer)`
    font-size: 14px;
    span:first-child {
        font-weight: 600;
        background: linear-gradient(90deg, #7b61ff, #dd16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    span:last-child {
        font-size: 14px;
        font-weight: 600;
        background: linear-gradient(90deg, #c52dd8 , #e91ed9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 1400px) {
        margin: 20px auto;
    }
    @media (max-width: 480px) {
        span:last-child {font-size: 10px;}
        font-size: 10px;
    }
`