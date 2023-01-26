import styled from "styled-components";
import { useState } from "react";

const compasImg = "/images/roads/compas.png";

const Roads = () => {
  const [activeRoad, setActiveRoad] = useState(false);
  return (
    <Wrapper className="mainPage">
      <img src={compasImg} className="bg" />
      {/* <div className="title">
        <h2>Wybierz trasę</h2>
      </div> */}
      <div className="content">
        <div className="oneRoad">
          <img src="" alt="" />
          <h4>name</h4>
          <p>dystans</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--secondaryColorBg);
  .bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35vw;
    opacity: 0.3;
    animation: compasRotate 10s infinite alternate;
  }
  @keyframes compasRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }
    100% {
      transform: translate(-50%, -50%) rotate(20deg);
    }
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* h2 {
      color: white;
    } */
  }
`;

export default Roads;
