import gif from "../../assets/images/gifs/sticker_5.webp";
import im from "../../assets/images/i'm.png";
import styled from "styled-components";

const WelcomeContainer = ({className}) => {
    return (
        <div className={className}>
            <div className="welcome-section">
                <p>Hi <img src={gif} alt=""/>, I'm <span>Mansur RT</span>, and I design digital spaces</p>
            </div>
            <div className="image">
                <img src={im} alt=""/>
            </div>
        </div>
    )
}

export const Welcome = styled(WelcomeContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 270px 0;
    span {
        font-weight: 600;
        background: linear-gradient(90deg, #7b61ff, #dd16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .welcome-section {
        font-size: clamp(18px, 5vw, 50px);
    }
    .welcome-section img {
        width: 58px;
    }
    .image {
        background: linear-gradient(135deg, #dd16ad, #7b61ff, #17aef4);
        padding: 8px;
        border-radius: 50%;
        display: inline-block;
    }
    .image img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        display: block;
    }
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        margin: 70px 0;
    }
`