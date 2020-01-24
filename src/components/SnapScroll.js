import React from "react";
import styled from "styled-components";

export default class SnapScroll extends React.Component {
  constructor(props) {
    super(props);
    this.page = React.createRef();
    this.lastElement = React.createRef();
    this.container = React.createRef();
  }

  scrollToLastElement = () => {
    if (this.container && this.lastElement && this.page) {
      this.page.current.scrollTop =
        this.container.current.offsetTop - this.page.current.offsetTop;
      this.container.current.scrollTop =
        this.lastElement.current.offsetTop - this.container.current.offsetTop;
    }
  };

  render() {
    const { children } = this.props;

    return (
      <Page ref={this.page}>
        <Container ref={this.container}>{children}</Container>
      </Page>
    );
  }
}

const Page = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  background: #f9f691;
`;
