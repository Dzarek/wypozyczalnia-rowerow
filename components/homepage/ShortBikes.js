import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { VscDebugBreakpointData } from "react-icons/vsc";
import Link from "next/link";

import { bikesArray } from "../../public/data";
// const rowerImg = "/images/bikes/rower.jpg";

const ShortBikes = () => {
  return (
    <Wrapper className="mainPage">
      <div className="title">
        <h2>Nasze Rowery</h2>
      </div>
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
          const { name, img, details, info, size, prices } = item;
          return (
            <div key={index} className="oneBike">
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
          );
        })}
      </Carousel>
      <Link href="/bikes">
        <p className="linkToBikes">Zobacz wszystkie</p>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 5vh;
  .title h2 {
    color: #444;
  }
  .carousel {
    width: 80vw;
    margin: 7vh auto 3vh;
  }
  .arrow {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      color: var(--secondaryColor);
    }
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  .oneBike {
    width: 90%;
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
  .linkToBikes {
    margin: 2vh auto;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2rem;
    color: var(--secondaryColor3);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    border: 2px solid white;
    transition: 0.5s;
    width: 40vw;
    padding: 5px;
    border-radius: 5px;
    font-family: var(--headerFont);
    letter-spacing: 3px;
    :hover {
      border: 2px solid var(--secondaryColor);
      color: var(--secondaryColor);
    }
  }
`;

export default ShortBikes;
