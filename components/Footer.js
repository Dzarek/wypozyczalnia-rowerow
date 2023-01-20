import styled from "styled-components";

import {
  MdPhoneAndroid,
  MdEmail,
  MdFacebook,
  MdLocationOn,
} from "react-icons/md";

const logoJarek = "/images/logoJarek.png";
const logo = "/images/homepage/headerImg.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="socialMediaWrapper">
          <h3>Kontakt :</h3>
          <a href="tel:+48798698605">
            <MdPhoneAndroid /> <span>+48 606 475 397</span>
          </a>
          <a href="tel:+34686738919">
            <MdPhoneAndroid /> <span>+34 686 738 919</span>
          </a>
          <a href="mailto:info@cyclotrener.pl">
            <MdEmail /> <span>info@cyclotrener.pl</span>
          </a>
          <a
            href="https://www.facebook.com/Cyclo-Agaete-Bike-Rental-641591279633781/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook /> <span>Cyclo Agaete Bike Rental</span>
          </a>
          <h4>
            <MdLocationOn />
            <span>
              Calle Maestro Jose Bermudez 5, 1G <br />
              35480 Agaete, Las Palmas de Gran Canaria <br />
              Hiszpania
            </span>
          </h4>
        </div>
        <img src={logo} alt="logo" className="logoFooter" />
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4185.385869082698!2d-15.703949287680176!3d28.10152308590123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc408b6ed78d535b%3A0xd8fa937f91bbf379!2sC.%20Jos%C3%A9%20Berm%C3%BAdez%2C%205%2C%2035480%20Agaete%2C%20Las%20Palmas%2C%20Hiszpania!5e0!3m2!1spl!2spl!4v1674217837512!5m2!1spl!2spl"
          className="map"
          title="mapa"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
        <div className="bankDetails">
          <h3>Dane do przelewu :</h3>
          <h4>
            {" "}
            <span>PLN</span> 46291000060000000003315884
          </h4>
          <h4>
            {" "}
            <span>€</span> ES3101822424140201582352
          </h4>
        </div>
      </div>

      <p className="allRights">
        &copy; {new Date().getFullYear()} DANIEL PASZEK CYCLO TRENER. Wszelkie
        prawa zastrzeżone.
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
  height: 45vh;
  background: #111;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 80%;
    height: 90%;
    position: relative;
    .logoFooter {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 15vh;
      /* margin: 0 5vw; */
      filter: saturate(0);
    }
  }
  .allRights {
    margin-top: 5vh;
    font-family: var(--titleFont);
    font-size: 1.1rem;
  }

  .socialMediaWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
    a,
    h4 {
      font-size: 1.2rem;
      margin-bottom: 1vh;
      font-weight: 500;
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      transition: 0.5s;
      font-family: var(--headerFont);
      letter-spacing: 2px;
      :hover {
        transform: scale(1.1);
      }
      svg {
        flex-shrink: 0;
        color: var(--secondaryColor);
        margin-right: 10px;
        font-size: 1.5rem;
      }
    }
  }
  h3 {
    margin-bottom: 2vh;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  /* .map {
    width: 30%;
    height: 90%;
    filter: sepia(0.5);
    border: 2px solid var(--secondaryColor);
    border-radius: 5px;
  } */
  .bankDetails {
    h3 {
      margin-bottom: 5vh;
    }
    h4 {
      font-size: 1.2rem;
      margin-bottom: 3vh;
      font-weight: 500;
      color: white;
      display: flex;
      align-items: center;
      transition: 0.5s;
      font-family: var(--headerFont);
      letter-spacing: 2px;
      :hover {
        transform: scale(1.1);
      }
      span {
        flex-shrink: 0;
        margin-right: 10px;
        font-size: 1.4rem;
        background: var(--secondaryColor);
        width: 50px;
        padding: 2px;
        border-radius: 10px;
        text-align: center;
      }
    }
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
