import styled from "styled-components";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";

const headerImg = "/images/homepage/headerImg.png";
const cycloagaeteH1 = "/images/homepage/cycloagaeteH1.png";
const headerBg = "/images/homepage/2.jpg";
const pasekBg = "/images/pasek2.png";
const polandFlag = "/images/poland-flag.png";
const englandFlag = "/images/england-flag.png";

const Header = () => {
  // console.log(window.innerWidth);
  return (
    <Wrapper>
      <img src={headerBg} alt="" className="headerBg" />
      {/* <div className="navPart"></div>
      <div className="navPart2"></div>
      <img src={headerImg} alt="" className="headerLogo" /> */}
      {/* <h1>{window.innerHeight}</h1>
      <h1>{window.innerWidth}</h1> */}
      <img src={pasekBg} alt="" className="pasek" />
      <nav>
        <Link href="/">
          <p className="activeNav">strona główna</p>
        </Link>
        <Link href="/bikes">
          <p>rowery</p>
        </Link>
        <Link href="/roads">
          <p>polecane trasy</p>
        </Link>
        <Link href="/gallery">
          <p>galeria</p>
        </Link>
        <Link href="/faq">
          <p>faq</p>
        </Link>
        <Link href="/regulations">
          <p>regulamin</p>
        </Link>
        <Link href="/contact">
          <p>kontakt</p>
        </Link>
        <div className="languages">
          <img src={polandFlag} alt="flaga polska" />
          <img src={englandFlag} alt="flaga angielska" />
        </div>
      </nav>
      <section>
        <div className="headerTitle">
          <h2>wypożyczalnia rowerów</h2>
          <img src={cycloagaeteH1} alt="" />
        </div>
        <Link href="/booking">
          <button>Rezerwuj Rower</button>
        </Link>
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
  background-color: black;
  .pasek {
    position: absolute;
    top: 0;
    left: 0;
    height: 126vh;
  }
  .languages {
    border-left: 2px solid var(--secondaryColor);
    display: flex;
    padding-left: 20px;
    img {
      width: 30px;
      margin: 0 10px;
      filter: saturate(0);
      transition: 0.4s;
      cursor: pointer;
      :hover {
        filter: saturate(0.9);
      }
      :nth-of-type(1) {
        filter: saturate(0.7);
      }
    }
  }
  .navPart {
    width: 15vw;
    height: 11vh;
    background: white;
    position: absolute;
    top: -1vh;
    left: 12vw;
    transform: rotate(-25deg);
  }
  .navPart2 {
    width: 4.52vw;
    height: 11vh;
    background: white;
    position: absolute;
    top: 3.8vh;
    left: 0;
    transform: translateY(50%);
  }
  .headerLogo {
    width: 10vw;
    /* height: 10vh; */
    position: absolute;
    top: 4.2vh;
    left: 3.8vw;
    /* margin-right: 10vw; */
    animation: logoAnim 2s linear infinite alternate;
  }
  nav {
    width: 80vw;
    height: 10vh;
    position: absolute;
    /* background-color: rgba(255, 255, 255, 1); */
    top: 0vh;
    /* transform: translateY(-50%); */
    right: 0;
    z-index: 999;
    padding: 0 5vw 0 5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      text-transform: uppercase;
      font-weight: 600;
      color: var(--secondaryColor);
      font-size: 1.4rem;
      font-family: var(--headerFont);
      height: 100%;
      padding: 0 1.5vw;
      cursor: pointer;
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background: var(--secondaryColor3);
        color: #fff;
      }
    }
    .activeNav {
      background: var(--secondaryColor);
      color: #fff;
    }
  }
  .headerBg {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0vh;
    left: 0;
    z-index: 0;
    animation: bgMove 20s linear infinite alternate;
    /* filter: brightness(0.7); */
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
    /* background-color: rgba(0, 0, 0, 0.8); */
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    /* .headerLogo {
      width: 15vw;
      position: absolute;
      top: 0%;
      left: 7%;
      transform: translateY(-50%);
      animation: logoAnim 2s linear infinite alternate;
    } */
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
    color: var(--secondaryColor3);
    background: #fff;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    border: 2px solid white;
    font-size: 1.3rem;
    font-family: var(--titleFont);
    z-index: 9999;
    cursor: pointer;
    transition: 0.4s;
    border: 2px solid var(--secondaryColor3);
    :hover {
      color: white;
      background: var(--secondaryColor3);
      border: 2px solid #fff;
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
