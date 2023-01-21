import { useEffect, useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowCircleUp } from "react-icons/hi";
// import { useGlobalContext } from "./context";

const logo = "/images/homepage/headerImg.png";
const headerBg = "/images/homepage/navBg.jpg";

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
      {/* LANGUAGES */}
      {/* REZERWACJA */}
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
          <a className={router.pathname == "/rowery" ? "active" : ""}>rowery</a>
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
    /* background: #111; */
    transition: 1s;
    border-radius: 0 0 50px 50px;
    background-image: url(${headerBg});
    background-size: cover;
    background-position: center 20%;
    h5,
    a {
      font-weight: 600;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-family: var(--headerFont);
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      text-decoration: none;
      color: white;
      &.active {
        color: var(--secondaryColor);
      }
      :hover {
        color: var(--secondaryColor3);
      }
    }

    .logo {
      margin-right: 5vw;
      cursor: pointer;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
  }
  .none {
    transition: 1s;
    transform: translateY(-15vh) translateX(-50%);
  }

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
