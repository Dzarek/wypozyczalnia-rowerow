import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Link from "next/link";
import { bikesArray } from "../../public/data";
import OneBike from "../OneBike";

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
          return (
            <div className="oneBike" key={index}>
              <OneBike item={item} />;
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
  margin-bottom: 5vh;
  .title h2 {
    color: #444;
  }
  .carousel {
    width: 80vw;
    margin: 7vh auto 3vh;
    height: 70vh;
    @media screen and (min-height: 800px) {
      height: 55vh;
    }
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
  .oneBike {
    width: 85%;
  }
`;

export default ShortBikes;
