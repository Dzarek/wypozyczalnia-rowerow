import styled from "styled-components";
import { useState } from "react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { roadsArray } from "../public/data";
import OneRoad from "../components/OneRoad";

const compasImg = "/images/roads/compas.png";

const Roads = () => {
  const [activeRoad, setActiveRoad] = useState(false);
  return (
    <Wrapper className="mainPage">
      <div className="firstInfo">
        <h3>
          Poniżej znajdziesz kilka tras rowerowych, które z gorącego serca
          polecamy. <br /> Aby z nich łatwo skorzystać zainstaluj aplikację{" "}
          <span>Mapy.cz</span> z sklep play lub app store.
        </h3>
        <section>
          <a href="https://play.google.com/store/apps/details?id=cz.seznam.mapy&hl=pl&gl=US">
            <FaGooglePlay />
          </a>
          <a href="https://apps.apple.com/pl/app/mapy-cz-navigation-maps/id411411020?l=pl">
            <FaAppStore />
          </a>
        </section>
      </div>
      <div className="bigContent">
        <div className="title">
          <h2>Wybierz trasę</h2>
        </div>
        <div className="content">
          <img src={compasImg} className="bg" />
          {roadsArray.map((item, index) => {
            const { name, image, distance } = item;
            return (
              <div
                onClick={() => setActiveRoad(item)}
                key={index}
                className="oneRoad"
              >
                <img src={image} alt="" />
                <h4>{name}</h4>
                <p>dystans: {distance} km</p>
                <button>Zobacz</button>
              </div>
            );
          })}
        </div>
      </div>
      {activeRoad && (
        <OneRoad activeRoad={activeRoad} setActiveRoad={setActiveRoad} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--secondaryColorBg);

  .firstInfo {
    width: 60vw;
    margin: 7vh auto 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
      span {
        font-weight: 700;
        color: var(--secondaryColor3);
      }
    }
    section {
      margin: 5vh;
      svg {
        margin: 0 3vw;
        font-size: 3rem;
        color: #222;
        transition: 0.4s;
        :hover {
          transform: scale(1.3);
        }
      }
    }
  }

  .bg {
    position: absolute;
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
    h2 {
      color: var(--secondaryColor3);
    }
  }
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    padding: 15vh 0 20vh;
  }
  .oneRoad {
    width: 18vw;
    height: 40vh;
    border: 2px solid var(--secondaryColor3);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    transition: 0.3s;
    z-index: 1;
    :hover {
      transform: scale(1.05);
    }
    img {
      height: 60%;
      width: 100%;
      object-fit: cover;
    }
    h4 {
      font-size: 1.3rem;
      color: var(--secondaryColor3);
      text-align: center;
    }
    p {
      font-size: 1.2rem;
      font-weight: 500;
    }
    button {
      width: 100%;
      height: 5vh;
      background-color: var(--secondaryColor3);
      color: white;
      border: none;
      text-transform: uppercase;
      font-family: var(--headerFont);
      font-size: 1.2rem;
      letter-spacing: 5px;
      cursor: pointer;
    }
    :nth-of-type(odd) {
      margin-top: -7vh;
    }
    :nth-of-type(even) {
      margin-top: 7vh;
    }
  }
`;

export default Roads;
