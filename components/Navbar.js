import { useEffect, useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowCircleUp } from "react-icons/hi";
// import { useGlobalContext } from "./context";

const logo = "/images/homepage/headerImg.png";
const headerBg = "/images/homepage/2.jpg";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const router = useRouter();

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <Wrapper>
      <div
        className={
          (offset > windowHeight && router.pathname == "/") ||
          router.pathname !== "/"
            ? "containerAll"
            : "none"
        }
      >
        <div
          className={
            (offset > windowHeight && router.pathname == "/") ||
            router.pathname !== "/"
              ? "navbar"
              : "navbar none"
          }
        >
          <img src={logo} alt="logo" className="logo" />
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              Strona Główna
            </a>
          </Link>
          <Link href="/bikes">
            <a className={router.pathname == "/rowery" ? "active" : ""}>
              rowery
            </a>
          </Link>
          <Link href="/roads">
            <a className={router.pathname == "/roads" ? "active" : ""}>
              polecane trasy
            </a>
          </Link>
          <Link href="/gallery">
            <a className={router.pathname == "/gallery" ? "active" : ""}>
              galeria
            </a>
          </Link>
          <Link href="/faq">
            <a className={router.pathname == "/faq" ? "active" : ""}>FAQ</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              kontakt
            </a>
          </Link>
        </div>
      </div>
      <button
        className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <HiArrowCircleUp />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* @media screen and (max-width: 800px) {
    display: none;
  } */
  .containerAll {
    position: fixed;
    height: 10vh;
    width: 85vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    background-image: url(${headerBg});
    background-size: cover;
    background-position: center 20%;
    border-radius: 0 0 50px 50px;
    transition: 1s;
  }
  .navbar {
    position: fixed;
    height: 10vh;
    width: 85vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 7vw 0 7vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    background: #111;
    /* transition: 1s; */
    border-radius: 0 0 50px 50px;

    background-color: rgba(0, 0, 0, 0.85);
    h5,
    a {
      font-weight: 600;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-family: var(--headerFont);
      /* margin: 0px 1.5vw 0; */
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      text-decoration: none;
      color: white;
      &.active {
        color: var(--secondaryColor);
        /* font-size: 1.6rem; */
      }
      :hover {
        color: var(--secondaryColor3);
      }
    }

    .logo {
      margin-right: 5vw;
      cursor: pointer;
      /* background: #111; */
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;

      /* h2 {
        font-family: "Genos", sans-serif;
        font-size: 1.7rem;
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover .logoIcon {
          transform: scale(1.2);
        }
        .logoIcon {
          margin: 5px 30px 0;
          color: var(--secondaryColor);
          transition: 0.4s;
          font-size: 1.5rem;
        }
        span {
          color: var(--primaryColor);
        }
      } */
    }
  }
  .none {
    /* display: none; */
    transition: 1s;
    transform: translateY(-15vh) translateX(-50%);
  }
  /* .navbarBg {
    transition: 1s;
    box-shadow: 0px 0px 10px 1px #ddd;
    h5,
    a {
      color: var(--secondaryColor);
      &.active {
        color: var(--secondaryColor3);
        font-size: 1.2rem;
      }
      :hover {
        color: var(--secondaryColor3);
      }
    }
  } */
  .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--secondaryColor);
    transition: 0.5s;
    cursor: pointer;
    z-index: 9999;
    :hover {
      color: var(--secondaryColor3);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;

export default Navbar;
