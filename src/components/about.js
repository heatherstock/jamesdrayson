import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
`;

const Heading = styled.h1`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  margin-left: 12px;
  font-size: 48px;
  line-height: 64px;
  margin: 0;
  color: black;
`

const Content = styled.p`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 18px;
  margin: 0;
`

const AboutPage = () => (
  <Wrapper>
    <Heading id='about'>About</Heading>
    <Content>
      — <br></br>Drayson is a digital designer and letterpress printer with a passion for beautiful typography and a 
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