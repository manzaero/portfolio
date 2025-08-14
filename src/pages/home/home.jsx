import styled from "styled-components";
import {Welcome, TechStack, ProjectCart} from "../../components";


const HomeComponent = ({className}) => {
    return (
        <div className={className}>
            <Welcome/>
            <TechStack/>
            <ProjectCart/>
        </div>
    )
}

export const Home = styled(HomeComponent)`
    dipslay: flex;
    flex-direction: column;
`