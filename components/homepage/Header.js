import styled from "styled-components";
import { HiChevronDoubleDown } from "react-icons/hi";

const headerImg = "/images/homepage/headerImg.png";
const cycloagaeteH1 = "/images/homepage/cycloagaeteH1.png";
const headerBg = "/images/homepage/2.jpg";
const polandFlag = "/images/poland-flag.png";
const englandFlag = "/images/england-flag.png";

const Header = () => {
  return (
    <Wrapper>
      <div className="languages">
        <img src={polandFlag} alt="flaga polska" />
        <img src={englandFlag} alt="flaga angielska" />
      </div>
      <nav>
        <p className="activeNav">strona główna</p>
        <p>rowery</p>
        <p>polecane trasy</p>
        <p>galeria</p>
        <p>faq</p>
        <p>regulamin</p>
        <p>kontakt</p>
      </nav>
      <img src={headerBg} alt="" className="headerBg" />
      <section>
        <img src={headerImg} alt="" className="headerLogo" />
        <div className="headerTitle">
          <h2>wypożyczalnia rowerów</h2>
          {/* <h2>bike rental</h2> */}
          {/* <h1>CYCLOAGAETE</h1> */}
          <img src={cycloagaeteH1} alt="" />
        </div>
        <button>Rezerwuj Rower</button>
      </section>
      <HiChevronDoubleDown className="headerArrow" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  .languages {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--secondaryColor2);
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    border-bottom-right-radius: 10px;
    img {
      /* border-radius: 50%; */
      width: 40px;
      margin: 0 10px;
      filter: saturate(0);
      transition: 0.4s;
      cursor: pointer;
      :hover {
        filter: saturate(0.9);
      }
    }
  }
  nav {
    width: 68vw;
    height: 8vh;
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    top: 32vh;
    transform: translateY(-50%);
    right: 0;
    z-index: 999;
    padding: 0 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-transform: uppercase;
      font-weight: 600;
      color: var(--secondaryColor);
      font-size: 1.5rem;
      font-family: var(--headerFont);
      height: 100%;
      padding: 0 1.5vw;
      cursor: pointer;
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background: var(--secondaryColor);
        color: #fff;
      }
    }
    .activeNav {
      background: var(--secondaryColor3);
      color: #fff;
    }
  }
  .headerBg {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    animation: bgMove 20s linear infinite alternate;
    filter: sepia(0.5);
  }
  @keyframes bgMove {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3);
    }
  }
  section {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    .headerLogo {
      width: 27vw;
      /* height: 60vh; */
      position: absolute;
      top: 40%;
      left: 7%;
      transform: translateY(-50%);
      animation: logoAnim 2s linear infinite alternate;
    }
    @keyframes logoAnim {
      0% {
        filter: saturate(1);
      }
      70% {
        filter: saturate(1);
      }
      100% {
        filter: saturate(0);
      }
    }
    .headerTitle {
      position: absolute;
      top: 55%;
      right: 5%;
      color: white;
      text-align: right;
      text-transform: uppercase;
      h2 {
        font-size: 3.2rem;
        font-weight: 500;
        font-family: var(--headerFont);
        letter-spacing: 3px;
      }
      /* h1 {
        font-size: 8rem;
      } */
      img {
        margin-top: 5vh;
        width: 45vw;
      }
    }
  }
  button {
    position: absolute;
    bottom: 10vh;
    left: 13vw;
    padding: 15px 30px;
    color: #fff;
    /* color: var(--secondaryColor3); */
    background: var(--secondaryColor);
    background: var(--secondaryColor2);
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    border: 2px solid white;
    font-size: 1.3rem;
    font-family: var(--titleFont);
    z-index: 9999;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      color: var(--secondaryColor2);
      background: #fff;
      border: 2px solid var(--secondaryColor2);
    }
  }
  .headerArrow {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: #eee;
    font-size: 3.5rem;
    animation: arrowLower 1.5s ease infinite;
    z-index: 999;
    @keyframes arrowLower {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        bottom: 5%;
        opacity: 0;
      }
    }
  }
`;

export default Header;
