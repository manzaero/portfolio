import styled from "styled-components";
import {Footer, Header} from "./components/index";

const AppColumn = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #fff;
`;

const Pages = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const MainContent = styled.div`
    flex: 1;
`;

export const Portfolio = () => {
  return (
      <AppColumn>
          <Pages>
              <Header/>
              <MainContent>Main page</MainContent>
              <Footer/>
          </Pages>
      </AppColumn>
  )
}