import styled from "styled-components";

const headerImg = "/images/homepage/headerImg.png";
const header2 = "/images/homepage/2.jpg";

const Header = () => {
  return (
    <Wrapper>
      <nav>
        <p>rowery</p>
        <p>polecane trasy</p>
        <p>galeria</p>
        <p>faq</p>
        <p>regulamin</p>
        <p>kontakt</p>
      </nav>
      <img src={header2} alt="" className="headerBg" />
      <section>
        <img src={headerImg} alt="" className="headerLogo" />
        <div className="headerTitle">
          <h2>wypożyczalnia rowerów</h2>
          <h1>CYCLOAGAETE</h1>
        </div>
        <button>Rezerwuj Rower</button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  nav {
    width: 68vw;
    height: 8vh;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    top: 32vh;
    transform: translateY(-50%);
    right: 0;
    z-index: 999;
    padding: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      text-transform: uppercase;
      font-weight: 600;
      color: var(--secondaryColor);
      font-size: 1.5rem;
      font-family: var(--titleFont);
    }
  }
  .headerBg {
    background-image: url(${header2});
    background-size: cover;
    background-position: center;
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
      top: 60%;
      right: 5%;
      color: white;
      text-align: right;
      text-transform: uppercase;
      h2 {
        font-size: 3rem;
        font-weight: 500;
      }
      h1 {
        font-size: 8rem;
      }
    }
  }
  button {
    position: absolute;
    bottom: 10vh;
    left: 13.5vw;
    padding: 15px 30px;
    color: #fff;
    background: var(--secondaryColor);
    background: var(--secondaryColor2);
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    border: 2px solid white;
    font-size: 1.3rem;
    font-family: var(--titleFont);
  }
`;

export default Header;
