import styled from "styled-components";
import Head from "next/head";
// import Link from "next/link";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { BiWinkSmile } from "react-icons/bi";
import { bikesArray } from "../public/data";

const bikeVideo = "/images/bikes/bikeVideo.mp4";
const headerSVG = "/images/bikes/headerSVG.png";

const Bikes = () => {
  return (
    <>
      <Head>
        <title>Cycloagaete | Rowery</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <header>
          <video
            src={bikeVideo}
            autoPlay
            muted
            loop
            playsInline
            type="video/mp4"
            className="video"
          ></video>
          <img src={headerSVG} alt="" />
          <div className="title">
            <h2>Nasze Rowery</h2>
          </div>
        </header>
        <h3 className="subTitle">
          Poniżej znajdziesz listę naszych rowerów. Wybierz ten, który
          najbardziej Ci odpowiada! <BiWinkSmile />
        </h3>
        <div className="content">
          {bikesArray.map((item, index) => {
            const { name, img, details, info, size, prices } = item;
            return (
              <article key={index}>
                <span>{index + 1}</span>
                <div className="oneBike">
                  <h3>{name}</h3>
                  <section>
                    <img src={img} alt={name} />
                    <div className="info">
                      <h4>Dane techniczne:</h4>
                      <ul>
                        {details.map((item, index) => {
                          return (
                            <li key={index}>
                              <VscDebugBreakpointData />
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                      <h4>Opis:</h4>
                      <p>{info}</p>
                      <h4>Rozmiar ramy:</h4>
                      <p>
                        <VscDebugBreakpointData />
                        {size}
                      </p>
                    </div>
                  </section>
                  <ul className="prices">
                    <li>1 dzień - {prices.one} €</li>
                    <li>2-5 dni - {prices.twoFive} €/dzień</li>
                    <li>6-12 dni - {prices.sixTwelvel} €/dzień</li>
                    <li>13 dni - {prices.thirteen} €/dzień</li>
                  </ul>
                  <button className="order">Zamów teraz</button>
                </div>
              </article>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 80vh;
  margin: 0 auto;
  /* padding: 15vh 0vw; */
  position: relative;
  header {
    width: 100vw;
    height: 50vh;
    position: relative;
    background: #111;
    background: var(--bikeVideoBg);

    .video {
      position: absolute;
      bottom: 0%;
      left: 0%;
      width: 50%;
      height: 80%;
      /* transform: translate(-50%, -50%); */
      object-fit: cover;
      /* filter: sepia(0.6) brightness(1); */
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .title {
      position: absolute;
      top: 55%;
      left: 70%;
      width: 50%;
      transform: translate(-50%, -50%);
      h2 {
        color: white;
      }
    }
  }
  .subTitle {
    width: 80vw;
    font-size: 1.5rem;
    margin: 10vh auto;
    text-align: center;
    svg {
      margin-left: 10px;
      margin-bottom: -5px;
      color: var(--secondaryColor3);
      font-size: 1.8rem;
    }
  }
  .content {
    width: 80vw;
    margin: 10vh auto;
    article {
      width: 100%;
      margin-bottom: 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 15rem;
        color: #aaa;
      }
      :nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  }
  .oneBike {
    width: 85%;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--secondaryColor);
    border-radius: 5px;

    h3 {
      width: 100%;
      text-transform: uppercase;
      background: var(--secondaryColor);
      color: #fff;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      text-align: center;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    section {
      display: flex;
      justify-content: space-around;
      /* flex-direction: row-reverse; */
      align-items: center;
      font-weight: 500;
      img {
        width: 40%;
      }
      .info {
        width: 55%;
        h4 {
          margin-top: 2vh;
          margin-bottom: 0.5vh;
          font-size: 1.2rem;
          text-transform: uppercase;
          color: var(--secondaryColor3);
        }
        li {
          font-size: 1.1rem;
          list-style: none;
          display: flex;
          align-items: center;
          svg {
            margin-right: 3px;
            margin-top: 3px;
            color: var(--secondaryColor);
          }
        }
        p {
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          svg {
            margin-right: 3px;
            margin-top: 3px;
            color: var(--secondaryColor);
          }
        }
      }
    }
    .prices {
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin-top: 2vh;
      li {
        background: var(--secondaryColor3);
        color: #fff;
        padding: 10px;
        width: 25%;
        font-weight: 500;
        font-size: 1.2rem;
        text-align: center;
        :nth-child(even) {
          background: var(--secondaryColor);
        }
      }
    }
    .order {
      width: 100%;
      padding: 10px;
      background: #fff;
      font-size: 1.2rem;
      font-weight: 500;
      border: none;
      text-transform: uppercase;
      font-family: var(--titleFont);
      letter-spacing: 3px;
      color: rgb(10, 10, 10);
      background: #555;
      color: white;
      transition: 1s;
      cursor: pointer;
      :hover {
        letter-spacing: 10px;
        background: #222;
      }
    }
  }
`;

export default Bikes;
