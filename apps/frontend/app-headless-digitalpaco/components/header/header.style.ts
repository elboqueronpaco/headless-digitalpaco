import styled from 'styled-components';



export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 6rem;
  line-height: 6;
  background-color: #1976d2;
  color: #F2F2F2;
  //margin-bottom: 6.5rem;
`;

export const ContainerHeader = styled.section`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
` 
export const Logo = styled.article`
  flex: 1 1 10%;
`
export const Panel = styled.article`
  flex: 1 1 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
  }
  a{
    display: block;
    color: #ffffff;
    text-decoration: none;
    padding: 0 2rem;
    &:hover{
      color: #1976d2;
      background-color: #F2F2F2;
    }
  }
`

export const Menu = styled.nav`

`