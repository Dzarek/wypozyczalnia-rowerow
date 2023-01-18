import styled from "styled-components";
import { MdLocationOn, MdDirectionsBike } from "react-icons/md";

const shortRoadsImg = "/images/homePage/shortRoads.png";

const ShortRoads = () => {
  return (
    <Wrapper className="mainPage">
      <div className="title">
        <h2>Polecane Trasy</h2>
      </div>
      <MdDirectionsBike className="bike svg" />
      <MdLocationOn className="marker svg" />
      <img src={shortRoadsImg} alt="mapa" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--secondaryColor3);
  background: #333;
  /* height: 85vh; */
  .title {
    display: block;
    margin-left: 5vw;
    h2 {
      color: white;
    }
  }
  .svg {
    color: var(--secondaryColor);
  }
  .bike {
    position: absolute;
    top: 49%;
    left: 13.5%;
    font-size: 7rem;
  }
  .marker {
    position: absolute;
    top: 20%;
    right: 25%;
    animation: markerSizer 2s infinite alternate;
    font-size: 8rem;
  }
  @keyframes markerSizer {
    0% {
      transform: scale(1.4);
    }
    60% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
  img {
    width: 80vw;
    height: 70vh;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default ShortRoads;
