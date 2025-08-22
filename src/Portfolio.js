import styled from "styled-components";
import {Footer, Header, ProjectCart, TechStack} from "./components/index";
import {Route, Routes} from "react-router-dom";
import {About, Contact, Home} from "./pages";

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #a7a7a7;
    width: 100%;
    min-width: 100%;
    padding: 0 300px;
    box-sizing: border-box;

    @media (max-width: 1400px) {
        padding: 0 150px;
    }

    @media (max-width: 1024px) {
        padding: 0 60px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }
    @media (max-width: 480px) {
        padding: 0 10px;
    }
    @media (max-width: 320px) {
        padding: 0 2px;
    }
`;

const Pages = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 75px;
`;



export const Portfolio = () => {
  return (
      <AppColumn>
          <Header/>
            <Pages>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/stack' element={<TechStack/>}></Route>
                    <Route path='/projects' element={<ProjectCart/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                </Routes>
            </Pages>
          <Footer/>
      </AppColumn>
  )
}