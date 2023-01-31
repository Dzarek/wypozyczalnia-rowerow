import styled from "styled-components";
import Head from "next/head";
import { HiShieldExclamation } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Regulations = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  return (
    <>
      <Head>
        <title>Cycloagaete | Regulamin</title>
        <meta name="description" content="Cycloagaete - Regulamin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper className="mainPage">
        <div className="title">
          <h2>Regulamin wypożyczenia roweru</h2>
        </div>
        <HiShieldExclamation className="exclamation" data-aos="zoom-in" />
        <div className="content">
          <h3>
            I Dokonywanie i odwoływanie rezerwacji <br /> <br /> § 1
          </h3>
          <p>
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque.
          </p>
          <p>
            2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <p>
            3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <h3>§ 2</h3>
          <p>
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla?
          </p>
          <p>
            2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <p>
            3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <p>
            4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsam repellendus aliquid sequi itaque, distinctio
            quaerat eum quis sint aliquam iure repellat hic non illo nulla? A
            quaerat iste molestiae delectus? Inventore voluptas, beatae
            reiciendis blanditiis, aliquam impedit laborum placeat deserunt esse
            molestias eaque. Itaque harum quam natus! Velit, est nemo?
          </p>
          <h3>§ 3</h3>
          <p>
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <p>
            2.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <h3>
            II Korzystanie z roweru <br /> <br />§ 4
          </h3>
          <p>
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla?
          </p>
          <p>
            2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <p>
            3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?
          </p>
          <p>
            4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid sequi itaque, distinctio quaerat eum quis sint
            aliquam iure repellat hic non illo nulla? A quaerat iste molestiae
            delectus? Inventore voluptas, beatae reiciendis blanditiis, aliquam
            impedit laborum placeat deserunt esse molestias eaque. Itaque harum
            quam natus! Velit, est nemo?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsam repellendus aliquid sequi itaque, distinctio
            quaerat eum quis sint aliquam iure repellat hic non illo nulla? A
            quaerat iste molestiae delectus? Inventore voluptas, beatae
            reiciendis blanditiis, aliquam impedit laborum placeat deserunt esse
            molestias eaque. Itaque harum quam natus! Velit, est nemo?
          </p>
          <br /> <br /> <br />
          <h3>
            Cycloagaete dziękuje wszystkim klientom za zapoznanie się z
            regulaminem i życzy Państwu udanych wycieczek. <br /> W sprawie
            jakichkolwiek pytań nasz team chętnie służy pomocą w godzinach pracy
            biura.
          </h3>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .title {
    margin: 10vh auto;
  }
  .exclamation {
    font-size: 8rem;
    margin: 0 auto;
    display: block;
    opacity: 0.8;
  }
  .content {
    width: 80vw;
    margin: 5vh auto 15vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--textFont);
    h2,
    h3 {
      margin: 5vh auto;
      align-self: center;
      color: var(--secondaryColor);
      text-align: center;
      font-family: var(--headerFont);
      font-size: 1.8rem;
      font-weight: 500;
    }

    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
      font-size: 1.2rem;
    }
  }
`;

export default Regulations;
