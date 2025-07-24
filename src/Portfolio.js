import styled from "styled-components";
import {Header} from "./components/header/header";

const AppColumn = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
`

const Pages = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

export const Portfolio = () => {
  return (
      <AppColumn>
          <Pages>
              <Header/>
          </Pages>
      </AppColumn>
  )
}