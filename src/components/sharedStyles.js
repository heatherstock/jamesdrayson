import { Link } from "gatsby"
import styled from "styled-components"

export const Heading = styled.h1`
  margin-top: 6px;
  padding-bottom: 12px;
  color: black;
`;

export const Wrapper = styled.div`
  padding-bottom: 36px;
  border-bottom: 3px solid black; 
`;

export const Text = styled.p`
margin-top: -24px;
`;

export const StyledLink = styled(Link)`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 2px;
  color: black;
  text-decoration: none;
  border-bottom: 3px solid black;
  margin-left: 12px;
  &:visited {
    border-bottom: 3px solid #777;
    color: #777;
  }
  &:hover {
    color: black;
    border-bottom: none;
  }
  &: active {
    border-bottom: 3px solid black;
  }
`;

export const List = styled.ul`
display: flex;  
flex-wrap: wrap;
  margin: 0;
  padding-left: 0px;
  padding-top: 36px;
`;

export const ListItem = styled.li`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

export const Div = styled.div`
@media (max-width: 899px) {
  position: relative;

}
@media (min-width: 900px) {
  display: flex;
  justify-content: center;
}
`

export const CardImages = styled.div`
@media (max-width: 899px) {
  position: aboslute;
}
@media (min-width: 900px) {
  float: left;
}
  width: 630px;
  padding: 18px; 
`

export const MobileImages = styled.div`
@media (max-width: 899px) {
  position: aboslute;
}
@media (min-width: 900px) {
  float: left;
}
  width: 318px;
  padding: 18px; 
`