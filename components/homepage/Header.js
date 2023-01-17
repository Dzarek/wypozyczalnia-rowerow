import styled from "styled-components";

const headerImg = "/images/homepage/headerImg.png";
const header1 = "/images/homepage/4.jpg";
const header2 = "/images/homepage/2.jpg";

const Header = () => {
  return (
    <Wrapper>
      <img src={header2} alt="" className="headerBg" />
      <section>
        <img src={headerImg} alt="" className="headerLogo" />
        <div className="headerTitle">
          <h2>wypożyczalnia rowerów</h2>
          <h1>CYCLOAGAETE</h1>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  /* background-color: #222; */

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
    background-color: rgba(0, 0, 0, 0.85);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    .headerLogo {
      width: 30vw;
      position: absolute;
      top: 50%;
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
`;

export default Header;
