import styled from "styled-components";

const TitleContainer = ({className, title, subtitle}) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export const Title = styled(TitleContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;
    h1 {
        font-size: 48px;
        margin-bottom: 24px;
        color: #CCCCCC;
    }
    p {
        font-size: 28px;
        margin: 0;
    }
`