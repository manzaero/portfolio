import gif from "../../assets/images/gifs/hi.gif"
import im from "../../assets/images/i'm.png"
import styled from "styled-components";

const HomeComponent = ({className}) => {
    return (
        <div className={className}>
            <div className="welcome-section">
                <p>Hi <img src={gif} alt=""/>, </p>
                <p>I'm <span>Mansur RT</span>,</p>
                <p>and I design digital spaces</p>
            </div>
            <div className="image">
                <img src={im} alt=""/>
            </div>
        </div>
    )
}

export const Home = styled(HomeComponent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 200px;
    span {
        font-weight: 600;
        background: linear-gradient(90deg, #7b61ff, #dd16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .welcome-section {
        font-size: 58px;
        line-height: 10px;
    }
    .welcome-section img {
        width: 58px;
    }
    .image {
        background: linear-gradient(135deg, #dd16ad, #7b61ff, #17aef4);
        padding: 5px;
        border-radius: 50%;
        display: inline-block;
    }
    .image img {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        display: block;
    }
`