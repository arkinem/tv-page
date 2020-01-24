import React from "react";
import styled from "styled-components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.page = React.createRef();
    this.lastElement = React.createRef();
    this.container = React.createRef();
  }

  scrollToLastElement = () => {
    if (this.container && this.lastElement && this.page) {
      // window.scrollTo(0, this.lastElement.current.offsetTop);

      this.page.current.scrollTop =
        this.container.current.offsetTop - this.page.current.offsetTop;
      this.container.current.scrollTop =
        this.lastElement.current.offsetTop - this.container.current.offsetTop;
    }
  };

  render() {
    return (
      <Page ref={this.page}>
        <Container ref={this.container}>
          <Element background={"grey"}>
            <Button onClick={this.scrollToLastElement}>
              Go to last element
            </Button>
          </Element>
          <Element background={"deeppink"} />
          <Element background={"black"} />
          <Element background={"rgb(20,20,20)"} />
          <Element background={"rgb(40,40,40)"} />
          <Element ref={this.lastElement} background={"rgb(60,60,60)"} />
        </Container>
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
`;

const Element = styled.div`
  background: ${({ background }) => background};
  height: 100vh;
  scroll-snap-align: start;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
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
