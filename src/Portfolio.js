import styled from "styled-components";
import {Footer, Header} from "./components/index";
import {Route, Routes} from "react-router-dom";

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
                    <Route path='/' element={<div>Home</div>}></Route>
                    <Route path='/about' element={<div>About</div>}></Route>
                    <Route path='/stack' element={<div>Stack</div>}></Route>
                    <Route path='/projects' element={<div>Projects</div>}></Route>
                    <Route path='/contact' element={<div>Contact</div>}></Route>
                </Routes>
            </Pages>
          <Footer/>
      </AppColumn>
  )
}