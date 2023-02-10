import styled from "styled-components";
import Link from "next/link";
import { useGlobalContext } from "../context";
import { HiChevronDoubleDown } from "react-icons/hi";

const cycloagaeteH1 = "/images/homepage/cycloagaeteH1.png";
const headerBg = "/images/homepage/headerBg.jpg";
const pasekBg = "/images/homepage/pasek.png";
const polandFlag = "/images/poland-flag.png";
const englandFlag = "/images/england-flag.png";

const Header = () => {
  const { plLanguage, setPlLanguage } = useGlobalContext();

  return (
    <Wrapper>
      <img src={headerBg} alt="" className="headerBg" />
      <img src={pasekBg} alt="" className="pasek" />
      <nav>
        <Link href="/">
          <p className="activeNav">
            {plLanguage ? "strona główna" : "home page"}
          </p>
        </Link>
        <Link href="/bikes">
          <p>{plLanguage ? "rowery" : "bikes"}</p>
        </Link>
        <Link href="/roads">
          <p>{plLanguage ? "polecane trasy" : "favorite roads"}</p>
        </Link>
        <Link href="/gallery">
          <p>{plLanguage ? "galeria" : "gallery"}</p>
        </Link>
        <Link href="/faq">
          <p>faq</p>
        </Link>
        <Link href="/regulations">
          <p>{plLanguage ? "regulamin" : "regulations"}</p>
        </Link>
        <Link href="/contact">
          <p>{plLanguage ? "kontakt" : "contact"}</p>
        </Link>
        <div className="languages">
          <img
            src={polandFlag}
            alt="flaga polska"
            onClick={() => setPlLanguage(true)}
            className={plLanguage ? "activeFlag" : ""}
          />
          <img
            src={englandFlag}
            alt="flaga angielska"
            onClick={() => setPlLanguage(false)}
            className={!plLanguage ? "activeFlag" : ""}
          />
        </div>
      </nav>
      <section>
        <div className="headerTitle">
          <h2>{plLanguage ? "wypożyczalnia rowerów" : "bike rental"}</h2>
          <img src={cycloagaeteH1} alt="" />
        </div>
        <Link href="/reservation">
          <button>{plLanguage ? "Rezerwuj Rower" : "reserve your bike"}</button>
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
    }
    .activeFlag {
      filter: saturate(0.7);
    }
  }

  nav {
    width: 80vw;
    height: 10vh;
    position: absolute;
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
    @media screen and (max-width: 800px) {
      display: none;
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
      transform: scale(1.1) translateX(-40px);
    }
    100% {
      transform: scale(1.1) translateX(40px);
    }
  }
  @media screen and (max-width: 800px) {
    @keyframes bgMove {
      0% {
        transform: scale(1.2) translateX(-20px);
      }
      100% {
        transform: scale(1.2) translateX(20px);
      }
    }
  }
  section {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    /* @keyframes logoAnim {
      0% {
        filter: saturate(1);
      }
      70% {
        filter: saturate(1);
      }
      100% {
        filter: saturate(0);
      }
    } */
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
      @media screen and (max-width: 800px) {
        top: 10%;
        right: 50%;
        transform: translateX(50%);
        text-align: center;

        h2 {
          font-size: 2rem;
          letter-spacing: 3px;
        }
        img {
          margin-top: 5vh;
          width: 80vw;
        }
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
    @media screen and (max-width: 800px) {
      font-size: 1.1rem;
      padding: 10px 15px;
      bottom: 20vh;
      left: 50%;
      transform: translateX(-50%);
      min-width: 60%;
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
    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }
  }
`;

export default Header;
