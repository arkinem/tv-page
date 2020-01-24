import React from "react";
import styled from "styled-components";
import SnapScroll from "../components/SnapScroll";

export default class MainPage extends React.Component {
  render() {
    return (
      <SnapScroll>
        <TvSection>Tv section</TvSection>
        <ContentSection>Content section</ContentSection>
      </SnapScroll>
    );
  }
}

const TvSection = styled.div`
  height: 100vh;

  scroll-snap-align: start;
`;

const ContentSection = styled.div`
  height: 100vh;

  scroll-snap-align: start;
`;

const Button = styled.div`
  background: aqua;
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 0.8;
  }
`;
