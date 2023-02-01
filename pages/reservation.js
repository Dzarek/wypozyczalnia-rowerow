import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { bikesArray } from "../public/data";
import OneBike from "../components/OneBike";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

let minDate = new Date().toISOString().slice(0, 10);

const Reservation = () => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [regulationBox, setRegulationBox] = useState(false);
  const [policyBox, setPolicyBox] = useState(false);
  const [withCoachBox, setWithCoachBox] = useState(false);
  const [dateStart, setDateStart] = useState(minDate);
  const [dateEnd, setDateEnd] = useState(dateStart);
  const [daysNumber, setDaysNumber] = useState(1);
  const [pedal, setPedal] = useState("własne");
  const [helment, setHelmet] = useState("własny");

  let nextDay = new Date(new Date(dateStart));
  nextDay.setDate(nextDay.getDate() + 1);
  const minDate2 = nextDay.toISOString().slice(0, 10);
  useEffect(() => {
    setDateEnd(nextDay.toISOString().slice(0, 10));
  }, [dateStart]);

  useEffect(() => {
    setDaysNumber(new Date(dateEnd).getDate() - new Date(dateStart).getDate());
  }, [dateStart, dateEnd]);

  const pedals = [
    "własne",
    "Shimano spd sl",
    "Shimano spd",
    "Crank Brothers",
    "Look",
  ].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const helmets = ["własny", "S/M", "L/XL"].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

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
                      checked={regulationBox}
                      onChange={() => setRegulationBox(!regulationBox)}
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
              <div className="formContainer">
                <div className="formInput inputName">
                  <label htmlFor="name">Imię i Nazwisko</label>
                  <input
                    id="name"
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
                      id="email"
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
                      id="phone"
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
                <h4 className="dateTitle">Termin wypożyczenia</h4>
                <div className="inputsDate">
                  <div className="formInput">
                    <label htmlFor="dateStart">Od:</label>
                    <input
                      id="dateStart"
                      type="date"
                      name="dateStart"
                      value={dateStart}
                      min={minDate}
                      onChange={(e) => setDateStart(e.target.value)}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="dateEnd">Do:</label>
                    <input
                      id="dateEnd"
                      type="date"
                      name="dateEnd"
                      value={dateEnd}
                      min={minDate2}
                      onChange={(e) => setDateEnd(e.target.value)}
                    />
                  </div>
                  <h4>
                    Liczba dni: <span>{daysNumber}</span>
                  </h4>
                </div>
                <h4 className="dateTitle">Dodatki</h4>
                <div className="inputsDate">
                  <div className="formInput">
                    <label htmlFor="pedal">Wybór pedałów:</label>
                    <select
                      name="pedal"
                      id="pedal"
                      value={pedal}
                      onChange={(e) => setPedal(e.target.value)}
                    >
                      {pedals}
                    </select>
                  </div>
                  <div className="formInput">
                    <label htmlFor="helment">Wybór kasku:</label>
                    <select
                      name="helment"
                      id="helment"
                      value={helment}
                      onChange={(e) => setHelmet(e.target.value)}
                    >
                      {helmets}
                    </select>
                  </div>
                  <h4 className="pedalHelmet">*Pedały/Kask - 3 euro/dzień</h4>
                </div>
                <div className="labelCookieContainer2">
                  <label className="labelCheck" htmlFor="withCoachBox">
                    <p className="coachInfo">
                      <input
                        type="checkbox"
                        id="withCoachBox"
                        name="withCoachBox"
                        required
                        checked={withCoachBox}
                        onChange={() => setWithCoachBox(!withCoachBox)}
                      />
                      Jestem zainteresowany/na wycieczką/treningiem z trenerem.
                    </p>
                  </label>
                </div>
                <div className="formInput">
                  <label htmlFor="message">Twoje uwagi...</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>

                <div className="labelCookieContainer2">
                  <label className="labelCheck" htmlFor="policyBox">
                    <p>
                      <input
                        type="checkbox"
                        id="policyBox"
                        name="policyBox"
                        required
                        checked={policyBox}
                        onChange={() => setPolicyBox(!policyBox)}
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

  /* FORM */
  .formContainer {
    width: 80%;
    margin: 0 auto;
  }
  .formSection {
    .sectionInfo {
      margin-bottom: 3vh;
    }
    .formInput {
      display: flex;
      flex-direction: column;
    }
    .inputName {
      width: 100%;
      margin: 2vh auto;
    }
    input,
    select {
      border-radius: 5px;
      padding: 5px 20px;
      font-size: 1.2rem;
      border: 2px solid var(--secondaryColor);
      font-family: var(--textFont);
    }
    label {
      font-size: 1.2rem;
      margin-bottom: 1vh;
      font-family: var(--headerFont);
      font-weight: 600;
    }
    .inputs {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2vh auto;
      .formInput {
        width: 45%;
      }
      input {
        width: 100%;
      }
    }
    .inputsDate {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 2vh auto 5vh;
      .formInput {
        width: 34%;
        margin-right: 2%;
      }
      input {
        width: 100%;
      }
      h4 {
        font-size: 1.3rem;
        font-family: var(--headerFont);
        text-transform: uppercase;
        margin-top: 4vh;
        margin-right: 2vw;
        span {
          color: var(--secondaryColor);
          font-size: 1.5rem;
        }
      }
      .pedalHelmet {
        font-size: 1.1rem;
      }
    }
    textarea {
      width: 100%;
      margin: 0vh auto 2vh;
      min-height: 20vh;
      padding: 20px 20px;
      border-radius: 5px;
      font-size: 1.1rem;
      border: 2px solid var(--secondaryColor);
      font-family: var(--textFont);
      line-height: 1.2;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
        padding: 8px 10px;
        min-height: 15vh;
        border: 2px solid var(--secondaryColor);
      }
    }
  }
  .labelCookieContainer2 {
    margin: 2vh auto;
    p {
      input {
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }
    }
    .coachInfo {
      color: var(--secondaryColor3);
      display: flex;
      align-items: center;
    }
  }
  .dateTitle {
    text-align: center;
    font-size: 1.4rem;
    margin: 4vh auto 1vh;
    text-transform: uppercase;
    font-family: var(--headerFont);
  }
`;

export default Reservation;
