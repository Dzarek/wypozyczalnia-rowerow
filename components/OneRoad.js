import styled from "styled-components";
import { IoClose, IoMap, IoTimeOutline } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";

const OneRoad = ({ activeRoad, setActiveRoad }) => {
  const { image, name, distance, linkToMap, time, info } = activeRoad;
  return (
    <Wrapper>
      <IoClose onClick={() => setActiveRoad(false)} className="closeIcon" />
      <div className="contentArticle">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <section>
          <span>
            <GiPathDistance /> {distance} km
          </span>
          <span>
            <IoTimeOutline /> {time} h
          </span>
        </section>
        <a href={linkToMap}>
          <IoMap className="mapIcon" />
          Link do MAPY.CZ
        </a>
        <p>{info}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  .closeIcon {
    position: absolute;
    top: 3vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    color: #eee;
    cursor: pointer;
    transition: 0.4s;

    :hover {
      color: var(--secondaryColor);
      transform: translateX(-50%) rotate(180deg);
    }
  }
  .contentArticle {
    background-color: #eee;
    width: 50vw;
    height: 80vh;
    position: relative;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    border-radius: 5px;
    border: 2px solid var(--secondaryColor2);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #222;
    @media screen and (max-width: 800px) {
      width: 100vw;
      top: 100%;
      transform: translate(-50%, -100%);
    }
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
    a {
      text-decoration: none;
      color: white;
      margin: 3vh auto 5vh;
      transition: 0.4s;
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      padding: 10px 20px;
      background: var(--secondaryColor3);
      border-radius: 5px;
      :hover {
        transform: scale(1.1);
      }
      .mapIcon {
        font-size: 3rem;
        margin-right: 10px;
      }
    }
    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 2rem;
        margin: 3vh 5vw;

        svg {
          color: var(--secondaryColor3);
          font-size: 3rem;
          margin-right: 10px;
        }
      }
    }
    h3 {
      margin: 0vh auto 3vh;
      text-transform: uppercase;
      font-size: 1.8rem;
      color: var(--secondaryColor2);
      padding: 3vh 3vw;
      font-family: var(--headerContactFont);
      text-align: center;
      background: #fff;
      width: 100%;
      @media screen and (max-width: 800px) {
        padding: 0 2vw;
      }
    }
    p {
      padding: 0 3vw;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 20px;
      @media screen and (max-width: 800px) {
        padding: 0 4vw;
      }
    }
  }
`;

export default OneRoad;
