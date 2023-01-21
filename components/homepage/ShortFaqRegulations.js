import styled from "styled-components";
import Link from "next/link";
import { BiWinkSmile } from "react-icons/bi";
import { TbFileText, TbEye, TbEdit, TbBike, TbArrowBack } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

const ShortFaqRegulations = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Jak dokonać rezerwacji?</h2>
      </div>
      <div className="content">
        <h3>
          Rezerwacja roweru w <span>Cycloagaete</span> jest łatwa jak jazda z
          górki! Składa się z 6 podstawowych kroków:
        </h3>
        <div className="steps">
          <div className="oneStep">
            <span>1</span>
            <h4>przeczytaj regulamin</h4>
            <TbFileText />
          </div>
        </div>
        <h3> Przekonaj się o tym sam przechodząc do panelu rezerwacji.</h3>
        <Link href="/booking">Rezerwuj Rower</Link>
        <div className="faqReg">
          <section>
            <h3>Przed dokonaniem rezerwacji zapoznaj się z regulaminem!</h3>
            <Link href="/regulations">Regulamin</Link>
          </section>
          <section>
            <h3>
              Masz pytania?
              <br />
              Tutaj znajdziesz odpowiedzi na te, które są najczęściej zadawane{" "}
              <BiWinkSmile />
            </h3>
            <Link href="/regulations">FAQ</Link>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 40vh;
  margin: 0 auto;
  padding: 5vh 5vw 0;
  position: relative;
  .content {
    width: 100%;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      span {
        color: var(--secondaryColor3);
        font-weight: 600;
        text-transform: uppercase;
        margin: 0 2px;
      }
    }
    a {
      text-decoration: none;
      background: var(--secondaryColor3);
      padding: 10px 20px;
      text-align: center;
      color: white;
      font-family: var(--headerFont);
      border-radius: 10px;
      font-size: 2rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-top: 3vh;
      transition: 0.4s;
      :hover {
        letter-spacing: 5px;
      }
    }
    .steps {
      margin: 5vh auto;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .oneStep {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #222;
        color: white;
        padding: 20px;
        height: 20vh;
        border-radius: 5px;
      }
    }
    .faqReg {
      width: 100%;
      margin: 10vh auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        h3 {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          svg {
            margin-left: 10px;
            margin-bottom: 2px;
            color: var(--secondaryColor3);
          }
        }
      }
    }
  }
`;

export default ShortFaqRegulations;
