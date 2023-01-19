import styled from "styled-components";

const logoJarek = "/images/logoJarek.png";
const logo = "/images/homepage/headerImg.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <ul>
          <li>606 475 397</li>
          <li>example@gmail.com</li>
          <li>cycloagaete</li>
          <li>cycloagaete2</li>
        </ul>
        <img src={logo} alt="logo" className="logoFooter" />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5084.755201012198!2d18.817495!3d50.415436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91a08108d225a37a!2sCyclo%20Trener%20Daniel%20Paszek!5e0!3m2!1spl!2spl!4v1674170578462!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>

      <p className="allRights">
        &copy; {new Date().getFullYear()} CYCLOAGAETE. Wszelkie prawa
        zastrzeżone.
      </p>
      <span className="logoJarek">
        <p>projekt i wykonanie</p>
        <a href="https://www.jarekjanas.com">
          <img src={logoJarek} alt="logo Jarosław Janas" />
        </a>{" "}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100vw;
  padding: 5vh 7vw;
  height: 40vh;
  background: #111;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    .logoFooter {
      height: 15vh;
      margin: 0 5vw;
      filter: saturate(0);
    }
  }
  .allRights {
    margin-top: 7vh;
    font-family: var(--titleFont);
    font-size: 1.1rem;
  }

  .logoJarek {
    position: absolute;
    bottom: 4%;
    left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    a {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        opacity: 0.8;
        :hover {
          filter: invert(100%);
        }
      }
    }
    p {
      font-size: 12px;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 800px) {
      bottom: 2%;
      left: 3%;
    }
  }
`;

export default Footer;
