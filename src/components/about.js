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
  font-size: 36px;
  line-height: 48px;
  margin: 0;
  color: black;
`

const Content = styled.p`
  font-family: Libre Baskerville, serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
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
      I am passionate about design and typography and love crafting great digital experiences: 
      from ideation to low fidelity wireframes to fully responsive user interactions, 
      driven by real data and user insight. I am experienced in working with small design 
      studios as well as working as part of cross functional, agile, product development 
      teams within larger companies, forming tight knit relationships with other disciplines 
      to fully realise ideas and create beautiful work.
    </Content>
    <Content>
      I live and breathe typography; it’s the first thing someone notices and reads when 
      discovering a brand or product, although it’s a fundamental often overlooked. 
      I’m happiest when creating clear visual hierarchies and making the most of typographic 
      subtleties to ensure a great user experience.
    </Content>
    <Content>
      To maintain a balance between digital and analogue, I can often be found covered in ink 
      and oil, setting wood and metal type and printing various letterpress things using antique 
      equipment. This passion of mine lets me disconnect digitally (the cabinets are full of 
      lead type which helps!) and get lost in the slow but rewarding process that letterpress 
      printing fosters, such as handling the white space and fiddling with hair spacing to 
      ensure the typographic details are just so. You can see some of my journey and the 
      ever-growing collection of type and equipment on Instagram (@draysonandstock).
    </Content>
    <Content>
      My latest obsession is gardening and I’m currently turning my front garden by the sea into 
      a fully functioning kitchen garden complete with 17 fruit trees (so far), while 
      encouraging as much wildlife as possible. 
    </Content>
  </Wrapper>
)

export default AboutPage