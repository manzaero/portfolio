import styled from "styled-components";

const SocialPanel = ({className}) => {
    return (
        <div className={className}>
            <ul>
                <a href="https://github.com/manzaero" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/github.svg"} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/manzaero/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/linked.svg"} alt=""/>
                </a>
                <a href="https://t.me/manzaero" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/tg.svg"} alt=""/>
                </a>
            </ul>
        </div>
    )
}

export const Social = styled(SocialPanel)`
    ul {
        font-size: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 0;
    }
    img {
        width: 100%;
        height: auto;
        max-width: 40px;
        min-width: 24px;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`