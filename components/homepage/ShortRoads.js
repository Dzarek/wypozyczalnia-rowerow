import styled from "styled-components";
import { MdLocationOn, MdDirectionsBike } from "react-icons/md";
import { FiMap } from "react-icons/fi";
import Link from "next/link";

const shortRoadsImg = "/images/homepage/shortRoads.png";

const ShortRoads = () => {
  return (
    <Wrapper className="mainPage">
      <div className="title">
        {/* <h2>Polecane Trasy</h2> */}
        <h2>Zastanawiasz się gdzie pojechać?</h2>
      </div>
      <MdDirectionsBike className="bike svg" />
      <MdLocationOn className="marker svg" />
      <img src={shortRoadsImg} alt="mapa" />
      <Link href="/roads">
        <div className="linkToRoads">
          <h3>Zobacz nasze proponowane trasy!</h3>
          <FiMap className="map" />
        </div>
      </Link>
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
    top: 57%;
    left: 12.5%;
    font-size: 5rem;
  }
  .marker {
    position: absolute;
    top: 28%;
    right: 24%;
    animation: markerSizer 2s infinite alternate;
    font-size: 7rem;
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
    width: 85vw;
    height: 60vh;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
  .linkToRoads {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    cursor: pointer;
    /* font-family: var(--headerFont); */
    h3 {
      font-size: 1.8rem;
    }
    svg {
      color: var(--secondaryColor);
      font-size: 3rem;
      margin-top: 2vh;
      transition: 0.3s;
    }
    :hover svg {
      /* margin-top: 5vh; */
      font-size: 4rem;
    }
  }
`;

export default ShortRoads;
