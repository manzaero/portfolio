import styled from "styled-components";
import {Footer, Header, ProjectCart, TechStack} from "./components/index";
import {Route, Routes} from "react-router-dom";
import {About, Contact, Home} from "./pages";

const AppColumn = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #a7a7a7;

    padding: 0 300px;
    box-sizing: border-box;
`;

const Pages = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
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