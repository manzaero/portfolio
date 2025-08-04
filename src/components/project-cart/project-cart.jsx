import styled from "styled-components";
import {Title} from "../title/title";
import plants from "../../assets/images/projects/plants.png";
import link from "../../assets/images/projects/icons/link.png"
import github from "../../assets/images/projects/icons/guthubicon.png"

const projectImages = [
    {img: plants}
]

const ProjectCartContainer = ({className}) => {
    return (
        <>
            <Title
                title="Projects"
                subtitle="Projects I have implemented."
            />
            <div className={className}>
                <img className="img" src={projectImages[0].img} alt="Plants"/>
                <div className="description">
                    <div className="title">
                        Project Tile goes here
                    </div>
                    <div className="content">
                        This is sample project description random things are
                        here in description This is sample project lorem ipsum
                        generator for dummy content
                    </div>
                    <div className="tech_stack">
                        Tech stack : HTML , JavaScript, SASS, React
                    </div>
                    <div className="links">
                        <div className="link-prew">
                            <img src={link} alt=""/>
                            <a href="https://external-site.com" target="_blank"
                               rel="noopener noreferrer">Live
                                Preview</a>
                        </div>
                        <div className="link-code">
                            <img src={github} alt=""/>
                            <a href="https://external-site.com" target="_blank"
                               rel="noopener noreferrer">View
                                Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ProjectCart = styled(ProjectCartContainer)`
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 568px;
    border-radius: 3%;
    overflow: hidden;
    .description {
        padding: 26px;
        background-color: #363636;
    }
    .img {
        width: 375px;
        height: 260px;
    }
    .title {
        font-size: 26px;
        font-weight: 300;
        margin-bottom: 18px;
    }
    .content {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 12px;
    }
    .tech_stack {
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 22px;
    }
    .links {
        display: flex;
        justify-content: space-between;
    }
    .link-prew,
    .link-code {
        display: flex;
        align-items: center;
        gap: 8px;
        
    }
    
`