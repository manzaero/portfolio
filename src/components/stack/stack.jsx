import styled from "styled-components";
import css from "../../assets/images/icons/css.png";
import docker from "../../assets/images/icons/docker.png";
import git from "../../assets/images/icons/git.png";
import github from "../../assets/images/icons/github.png";
import js from "../../assets/images/icons/js.png";
import laravel from "../../assets/images/icons/laravel.png";
import mongodb from "../../assets/images/icons/mongodb.png";
import photoshop from "../../assets/images/icons/photoshop.png";
import phpstorm from "../../assets/images/icons/phpstorm.png";
import pinia from "../../assets/images/icons/pinia.png";
import postman from "../../assets/images/icons/postman.png";
import react from "../../assets/images/icons/react.png";
import redux from "../../assets/images/icons/redux.png";
import sass from "../../assets/images/icons/sass.png";
import tailwind from "../../assets/images/icons/tailwind.png";
import vscode from "../../assets/images/icons/vscode.png";
import vue from "../../assets/images/icons/vue.png";
import webstorm from "../../assets/images/icons/webstorm.png";
import {Title} from "../title/title";

const icons = [
    { name: "CSS", src: css },
    { name: "Docker", src: docker },
    { name: "Git", src: git },
    { name: "GitHub", src: github },
    { name: "JavaScript", src: js },
    { name: "Laravel", src: laravel },
    { name: "MongoDB", src: mongodb },
    { name: "Photoshop", src: photoshop },
    { name: "PhpStorm", src: phpstorm },
    { name: "Pinia", src: pinia },
    { name: "Postman", src: postman },
    { name: "React", src: react },
    { name: "Redux", src: redux },
    { name: "Sass", src: sass },
    { name: "Tailwind", src: tailwind },
    { name: "VS Code", src: vscode },
    { name: "Vue", src: vue },
    { name: "WebStorm", src: webstorm },
];

const TechStackComponent = ({ className }) => {
    return (
        <>
            <Title
                title="My Tech Stack"
                subtitle="Technologies I’ve been working with recently"
            />
            <div className={className}>
                {icons.map(({name, src}) => (
                    <div className="icon-block" key={name}>
                        <img src={src} alt={name} className="icon"/>
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export const TechStack = styled(TechStackComponent)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 20px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 48px;

    .icon-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        max-width: 90px;
        margin: 0 auto;
    }

    .icon {
        width: 90px;
        height: 90px;
        margin-bottom: 8px;
    }

    span {
        font-size: 14px;
        color: #333;
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        max-width: 480px;

        .icon-block {
            max-width: 80px;
        }

        .icon {
            width: 80px;
            height: 80px;
        }
    }
    
    @media (max-width: 720px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        max-width: 480px;

        .icon-block {
            max-width: 70px;
        }

        .icon {
            width: 70px;
            height: 70px;
        }
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(3, 1fr);
        max-width: 320px;

        .icon-block {
            max-width: 60px;
        }

        .icon {
            width: 60px;
            height: 60px;
        }

        span {
            font-size: 13px;
        }
    }

    @media (max-width: 320px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 200px;

        .icon-block {
            max-width: 50px;
        }

        .icon {
            width: 50px;
            height: 50px;
        }

        span {
            font-size: 12px;
        }
    }
`;

