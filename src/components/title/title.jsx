import styled from "styled-components";

const TitleContainer = ({className, title, subtitle}) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    )
}

export const Title = styled(TitleContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 48px;
        margin-bottom: 48px;
        color: #CCCCCC;
    }
    h3 {
        font-size: 32px;
        margin: 0;
    }
`