import styled from "styled-components";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";

const cycloagaeteH1 = "/images/homepage/cycloagaeteH1.png";
const headerBg = "/images/homepage/headerBg.jpg";
const pasekBg = "/images/homepage/pasek.png";
const polandFlag = "/images/poland-flag.png";
const englandFlag = "/images/england-flag.png";

const Header = () => {
  return (
    <Wrapper>
      <img src={headerBg} alt="" className="headerBg" />
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
  .pasek {
    position: absolute;
    top: 0;
    left: 0;
    height: 126vh;
    @media screen and (max-width: 1100px) {
      display: none;
    }
    @media screen and (max-height: 500px) {
      display: none;
    }
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

  nav {
    width: 80vw;
    height: 10vh;
    position: absolute;
    /* background-color: rgba(255, 255, 255, 1); */
    top: 0vh;
    right: 0;
    z-index: 999;
    padding: 0 5vw 0 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1440px) {
      padding: 0 3vw 0 3vw;
    }
    @media screen and (max-width: 1100px) {
      background-color: rgba(255, 255, 255, 1);
      width: 100vw;
    }
    @media screen and (max-height: 500px) {
      background-color: rgba(255, 255, 255, 1);
      width: 100vw;
    }
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

      @media screen and (max-width: 1440px) {
        padding: 0 1vw;
        font-size: 1.2rem;
      }
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
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

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
