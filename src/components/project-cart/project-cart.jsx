import styled from "styled-components";
import {Title} from "../title/title";
import link from "../../assets/images/projects/icons/link.png"
import github from "../../assets/images/projects/icons/guthubicon.png"
import {useRequest} from "../../hooks/use-request";




const ProjectCartContainer = ({className}) => {
    const {data, loading, error} = useRequest(
        "https://d036968716ddca81.mokky.dev/stacks"
    )
    console.log(data)
    if (loading) return <div className="octagon-loader"></div>
    if  (error) return <p>Ошибка: {error.message}</p>;

    return (
        <>
            <Title
                title="Projects"
                subtitle="Projects I have implemented"
            />
            <div className={className}>
                {
                    data?.map((item) => (
                        <div className="card" key={item.id}>
                            <img className="img" src={process.env.PUBLIC_URL + "/assets/images/projects/" + item.img}
                                 alt="Plants"/>
                            <div className="description">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="content">
                                    {item.description}
                                </div>
                                <div className="tech_stack">
                                    Tech stack : {item.tech}
                                </div>
                                <div className="links">
                                    <div className="link-prew">
                                        <img src={link} alt=""/>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">Live
                                            Preview</a>
                                    </div>
                                    <div className="link-code">
                                        <img src={github} alt=""/>
                                        <a href={item.github}
                                           target="_blank"
                                           rel="noopener noreferrer">View
                                            Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export const ProjectCart = styled(ProjectCartContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 3%;
        overflow: hidden;
        gap: 20px;
        padding: 15px 0px;
    }

    .img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    
    .links {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }
    
    .links img {
        margin-right: 10px;
    }
    
    .description {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1;
    }
    
    .title {
        color: #e91ed9;
    }

    @media (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        .title { font-size: 22px; }
        .content { font-size: 16px; }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        .title { font-size: 20px; }
        .content { font-size: 15px; }
    }

    @media (max-width: 480px) {
        .title { font-size: 18px; }
        .content { font-size: 14px; }
        .tech_stack { font-size: 12px; }
        .links {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
    }

    @media (max-width: 320px) {
        .title { font-size: 16px; }
        .content { font-size: 13px; }
        .tech_stack { font-size: 11px; }
    }
`;
