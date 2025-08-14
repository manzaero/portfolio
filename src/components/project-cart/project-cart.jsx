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
                subtitle="Projects I have implemented."
            />
            <div className={className}>
                {
                    data?.map((item) => (
                        <div className="card" key={item.id}>
                            <img className="img" src={item.img}
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
        width: 375px;
        height: 100%;
        border-radius: 3%;
        overflow: hidden;
    }
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
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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

    .octagon-loader {
        --size: 80px;

        width: var(--size);
        aspect-ratio: 1 / 1;
        position: relative;

        background: linear-gradient(45deg, #4f46e5, #22d3ee);
        clip-path: polygon(
                30% 0%, 70% 0%,
                100% 30%, 100% 70%,
                70% 100%, 30% 100%,
                0% 70%, 0% 30%
        );

        animation: spin 1.2s linear infinite;

        filter: hue-rotate(60deg) brightness(1.3) saturate(1.5);
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

`