import styled from "styled-components";

const Regulations = () => {
  return (
    <Wrapper className="mainPage">
      <div className="title">
        <h2>Regulamin wypożyczenia roweru</h2>
      </div>
      <div className="content"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    margin: 10vh auto;
  }
`;

export default Regulations;
