import styled from "styled-components";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
// import { useGlobalContext } from "../components/context";

const gallery = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
];

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1440: 3,
    900: 2,
    500: 1,
  };

  return (
    <>
      <Head>
        <title>Cycloagaete | Galeria</title>
        <meta name="description" content="Cycloagaete - Galeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <div className="title">
          <div className="titleLine"></div>
          <h2>Galeria zdjęć</h2>
          <div className="titleLine"></div>
        </div>
        <div className="galleryContent">
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {gallery.map((item, index) => {
                return (
                  <img
                    data-aos="fade-down"
                    className="oneImg"
                    key={index}
                    src={item}
                    alt=""
                  />
                );
              })}
            </Masonry>
          </SRLWrapper>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 80vh;
  margin: 0 auto;
  padding: 10vh 0;
  position: relative;
  .title {
    margin: 10vh auto 5vh;
    justify-content: space-between;

    .titleLine {
      background: var(--secondaryColor);
      height: 2px;
      width: 0;
      animation: growLine 3s ease 1 forwards;
      @keyframes growLine {
        100% {
          width: 35vw;
        }
      }
    }
  }
  .galleryContent {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    padding: 5vh 5vw;
    @media screen and (max-width: 800px) {
      padding: 30px 0;
    }
  }
  .oneImg {
    cursor: pointer;
    /* filter: brightness(0.8); */
    transition: 0.2s;
    border: 4px solid #fff;
    :hover {
      border: 4px solid var(--secondaryColor);
    }
  }
  .my-masonry-grid {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  .my-masonry-grid_column > img {
    background: grey;
    margin: 10px;
    width: 27vw;
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin: 0 auto 10px;
    }
  }
`;

export default Gallery;
