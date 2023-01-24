import styled from "styled-components";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

import { RiTruckLine, RiTimeLine, RiTeamLine } from "react-icons/ri";

const firstInfoImg = "/images/homepage/firstInfoImg.png";

const FirstInfo = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000, disable: "false" });
  // }, []);
  return (
    <Wrapper>
      <section>
        <h2>O nas</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea
          natus autem molestias ducimus voluptate vel sit nostrum praesentium
          at, ut quia asperiores minima. Similique, ad. Quae, maxime architecto
          ipsum nostrum delectus, debitis tempore iste reiciendis dolorem
          officia alias, harum autem ea repellat rem! Deleniti temporibus,
          facere et veritatis voluptatibus debitis ut tempora modi doloribus
          blanditiis? Molestiae dolore quos hic recusandae, eveniet facilis
          corrupti, eaque quaerat repellat fugit laboriosam fuga! Nihil hic
          commodi odio reprehenderit aut ipsam voluptatum labore dolorum veniam
          exercitationem, neque molestiae error! Quo ipsam recusandae doloribus
          autem, fuga, excepturi alias modi veritatis magni accusantium maxime
          veniam consectetur.
        </p>
        <div className="iconContent">
          <div className="onePart">
            <RiTruckLine />
            <h4>
              7 dni w górę - dostawa gratis <br /> na terenie całej wyspy
            </h4>
          </div>
          <div className="onePart">
            <RiTimeLine />
            <h4>
              Czynne 24h na dobę/ <br /> 7 dni w tygodniu
            </h4>
          </div>
          <div className="onePart">
            <RiTeamLine />
            <h4>
              Domowa atmosfera <br /> kolarskiej rodziny
            </h4>
          </div>
        </div>
      </section>
      {/* <img src={firstInfoImg} alt="" data-aos="fade-left" /> */}
      <img src={firstInfoImg} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  margin: 5vh auto;
  padding: 0vh 10vw 10vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  section {
    width: 50vw;
    text-align: left;
    h2 {
      margin-bottom: 5vh;
      color: var(--secondaryColor);
      text-transform: uppercase;
      font-size: 3rem;
      /* text-align: center; */
      letter-spacing: 5px;
      font-family: var(--headerFont);
    }
    p {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.5;
    }
    .iconContent {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 7vh;
      .onePart {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        svg {
          color: var(--secondaryColor);
          margin-bottom: 2vh;
          font-size: 3rem;
          transition: 0.4s;
        }
        h4 {
          text-align: center;
          font-size: 1.4rem;
          font-weight: 500;
          font-family: var(--headerFont);
        }
        :hover svg {
          transform: scale(1.2);
        }
      }
    }
  }
  img {
    width: 25vw;
  }
`;

export default FirstInfo;
