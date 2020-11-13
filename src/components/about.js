import React from "react"
import styled from "styled-components";
import "fontsource-libre-baskerville"

const Wrapper = styled.div`
  margin: 0;
  padding-bottom: 60px;
`;

const Heading = styled.h1`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  margin-left: 12px;
  font-size: 42px;
  line-height: 54px;
  margin: 0;
  color: black;
`

const Content = styled.p`
  font-family: Libre Baskerville, serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 48px;
  margin: 0;
  text-indent: 36px;
`

const style = {
  "text-indent": "0px",
}

const AboutPage = () => (
  <Wrapper>
    <Heading id='about'>About</Heading>
    <Content style={style}>
      Drayson is a digital designer and letterpress printer with a passion for beautiful typography and a 
        thing for nice paper. He creates beautiful letterpress wedding stationery, greetings cards and prints 
        using antique type and printing equipment, and is usually found covered in ink or oil (or both!).
      </Content>
      <Content>
        Drayson is a digital designer and letterpress printer with a passion for beautiful typography and a 
        thing for nice paper. He creates beautiful letterpress wedding stationery, greetings cards and prints 
        using antique type and printing equipment, and is usually found covered in ink or oil (or both!).
      </Content> 
      <Content>
        Drayson is a digital designer and letterpress printer with a passion for beautiful typography and a 
        thing for nice paper. He creates beautiful letterpress wedding stationery, greetings cards and prints 
        using antique type and printing equipment, and is usually found covered in ink or oil (or both!).
      </Content> 
  </Wrapper>
)

export default AboutPage