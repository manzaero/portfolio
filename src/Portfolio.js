import styled from "styled-components";
import {Footer, Header} from "./components/index";
import {Route, Routes} from "react-router-dom";

const AppColumn = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #fff;

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
                    <Route path='/' element={<div>Home</div>}></Route>
                    <Route path='/' element={<div>Home</div>}></Route>
                    <Route path='/' element={<div>Home</div>}></Route>
                    <Route path='/' element={<div>Home</div>}></Route>
                </Routes>
            </Pages>
          <Footer/>
      </AppColumn>
  )
}