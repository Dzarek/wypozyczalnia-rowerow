import styled from "styled-components";

const firstInfoImg = "/images/homepage/firstInfoImg.png";

const FirstInfo = () => {
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
      </section>
      <img src={firstInfoImg} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 12vh 10vw 5vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  section {
    width: 45vw;
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
  }
  img {
    width: 25vw;
  }
`;

export default FirstInfo;
