import styled from "styled-components";
import { useState } from "react";
import { useGlobalContext } from "./context";
import { MdPedalBike } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiArrowCircleRight } from "react-icons/hi";
import { bikesArray } from "../public/data";

const ChoosenBike = () => {
  const { choosenBikes, setChoosenBikes } = useGlobalContext();
  const [showBikes, setShowBikes] = useState(false);

  const handleDelete = (item) => {
    const updateBikes = choosenBikes.filter((el) => el !== item);
    setChoosenBikes(updateBikes);
  };

  return (
    <>
      {choosenBikes.length > 0 && (
        <Wrapper>
          <div className={showBikes ? "all showAll" : "all"}>
            <div className="iconBike">
              {showBikes ? (
                <HiArrowCircleRight onClick={() => setShowBikes(false)} />
              ) : (
                <MdPedalBike
                  onClick={() => setShowBikes(true)}
                  className="bikeIcon"
                />
              )}
            </div>
            <div className="container">
              <h4>Wybrane rowery:</h4>
              {choosenBikes.length > 0 && (
                <ul>
                  {choosenBikes.map((item, index) => {
                    return (
                      <li key={index}>
                        <MdPedalBike /> {item}
                        <IoClose onClick={() => handleDelete(item)} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  .all {
    position: fixed;
    top: 15vh;
    right: 0vw;
    z-index: 999999999;
    display: flex;
    align-items: flex-start;
    transform: translateX(40vw);
    transition: 0.5s;
  }
  .showAll {
    transform: translateX(0);
    transition: 0.5s;
  }
  .iconBike {
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background: var(--secondaryColorBg);
    border: 2px solid var(--secondaryColor3);
    border-right: 2px solid var(--secondaryColorBg);
    border-radius: 10px 0 0 10px;
    transform: translateX(3px);
  }
  svg {
    font-size: 2.5rem;
    color: var(--secondaryColor3);
  }
  .bikeIcon {
    animation: iconSize 1s infinite alternate;
    @keyframes iconSize {
      100% {
        transform: scale(1.1);
      }
    }
  }
  .container {
    padding: 2vh 2vw;
    background: var(--secondaryColorBg);
    width: 40vw;
    border: 2px solid var(--secondaryColor3);
    border-right: none;
    border-radius: 0 0 0 10px;
    h4 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 3vh;
      font-family: var(--headerFont);
      text-transform: uppercase;
      font-weight: 600;
    }
    ul {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 1vh;
        svg {
          color: var(--secondaryColor3);
          margin-right: 10px;
          flex-shrink: 0;
          font-size: 1.4rem;
          :nth-of-type(2) {
            margin-left: 10px;
            font-size: 1.6rem;
            cursor: pointer;
            transition: 0.3s;
            color: var(--deleteColor);
            :hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
  }
`;

export default ChoosenBike;
