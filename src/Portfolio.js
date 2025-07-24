import styled from "styled-components";

const AppColumn = styled.div`
    background-color: #444;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1250px;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 25px;
`

const Pages = styled.div`
    padding: 50px 0;
`

export const Portfolio = () => {
  return (
      <AppColumn>
          <Pages>
              {/*<Header/>*/}
          </Pages>
      </AppColumn>
  )
}