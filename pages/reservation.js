import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import emailjs from "emailjs-com";
import { bikesArray } from "../public/data";
import OneBike from "../components/OneBike";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Reservation = () => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);
  return (
    <>
      <Head>
        <title>Cycloagaete | Rezerwacja</title>
        <meta name="description" content="Cycloagaete - Rezerwacja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>{" "}
      <Wrapper className="mainPage">
        <div className="title">
          <h2>Rezerwacja</h2>
        </div>
        <form className="content">
          <section className="oneSection">
            <span className="numberSection">1.</span>
            <div className="details">
              <h3 className="sectionName">Zapoznaj się z regulaminem</h3>
              <p className="sectionInfo">
                Przed dokonaniem rezerwacji przeczytaj regulamin wypożyczenia
                roweru.
                <Link href="/regulations">
                  <button className="buttonLink">Regulamin</button>
                </Link>
              </p>
              <div className="labelCookieContainer">
                <label className="labelCheck" htmlFor="accept">
                  <p className="sectionInfo">
                    <input
                      type="checkbox"
                      id="accept"
                      name="accept"
                      required
                      checked={box}
                      onChange={() => setBox(!box)}
                    />
                    Oświadczam że zapoznałem się z regulaminem i go akceptuję.
                  </p>
                </label>
              </div>
            </div>
          </section>
          <section className="oneSection">
            <span className="numberSection">2.</span>
            <div className="details">
              <h3 className="sectionName">Wybierz dla siebie rower</h3>
              <p className="sectionInfo">
                Wybierz jeden lub więcej rowerów z listy poniżej lub przejdź do
                zakładki ROWERY, aby zobaczyć wszystkie.{" "}
                <Link href="/bikes">
                  <button className="buttonLink">Rowery</button>
                </Link>
              </p>
              <Carousel
                className="carousel"
                infinite
                autoPlay={5000}
                animationSpeed={1000}
                slidesPerPage={1}
                breakpoints={{
                  900: {
                    slidesPerPage: 1,
                  },
                }}
                addArrowClickHandler
                stopAutoPlayOnHover
                draggable={false}
                arrowLeft={<MdOutlineArrowBackIos className="arrow" />}
                arrowRight={<MdOutlineArrowForwardIos className="arrow" />}
              >
                {bikesArray.map((item, index) => {
                  return (
                    <div className="oneBike" key={index}>
                      <OneBike item={item} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </section>
          <section className="oneSection formSection">
            <span className="numberSection">3.</span>
            <div className="details">
              <h3 className="sectionName">Wypełnij formularz</h3>
              <p className="sectionInfo">
                Uzupełnij formularz swoimi danymi. Wybierz dogodny dla siebie
                czas i miejsce odbioru sprzętu.
              </p>
              <div className="formInput inputName">
                <label htmlFor="name">Imię i Nazwisko</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputs">
                <div className="formInput">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    minLength={9}
                    maxLength={12}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="formInput">
                <label htmlFor="message">Twoje uwagi...</label>
                <textarea
                  name="message"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
              <div className="labelCookieContainer">
                <label className="labelCheck" htmlFor="accept">
                  <p>
                    <input
                      type="checkbox"
                      id="accept"
                      name="accept"
                      required
                      checked={box}
                      onChange={() => setBox(!box)}
                    />
                    Wyrażam zgodę na przetwarzanie danych osobowych w celu
                    odpowiedzi na mojego e-maila
                    <span
                      onClick={() => setVisibleCookie(true)}
                      className="cookieLink"
                    >
                      (Polityka Prywatności).
                    </span>
                  </p>
                </label>
              </div>
            </div>
          </section>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .title {
    margin-top: 10vh;
  }
  .content {
    width: 80vw;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    .oneSection {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 1px solid var(--secondaryColor3);
      padding: 5vh 3vw;
      /* :nth-last-of-type(1) {
        border-bottom: none;
      } */
      .numberSection {
        font-size: 10rem;
        color: #333;
        font-family: var(--headerFont);
      }
      .details {
        width: 85%;
        .sectionName {
          font-family: var(--headerFont);
          font-size: 1.9rem;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 5vh;
        }
        .sectionInfo {
          font-weight: 500;
          font-size: 1.2rem;
        }
        .buttonLink {
          margin: 3vh auto 3vh 2vw;
        }
        .labelCookieContainer {
          p {
            cursor: pointer;
            display: flex;
            align-items: center;
            input {
              margin-right: 10px;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  .carousel {
    .oneBike {
      width: 95%;
      margin-top: 3vh;
    }
  }
  .formSection {
    .sectionInfo {
      margin-bottom: 3vh;
    }
    .inputs {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .formInput {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Reservation;
