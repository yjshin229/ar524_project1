import React, { useState } from "react";
import styled from "styled-components";
import DataSet from "../DataSet";

import { BsFillQuestionOctagonFill } from "react-icons/bs";
import CustomModal from "../components/Modal";
import { Link } from "react-router-dom";

const InfoGraphicsScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(<></>);

  const handleHelpModalOpen = () => {
    const HelpModalContent = () => {
      return (
        <StyledHelpModalDiv>
          <h3>Tip!</h3>
          <p>Hover over the license plates to see more details.</p>
        </StyledHelpModalDiv>
      );
    };

    setModalChildren(HelpModalContent);
    setIsModalOpen(!isModalOpen);
  };

  const handleDetailModalOpen = (category) => {
    const StyledIcon = styled.img`
      width: 10rem;
      height: auto;
      object-fit: contain;
    `;

    const data = DataSet.filter((obj) => {
      return obj.name === category;
    });

    const DetailModalContent = () => {
      return (
        <StyledDetailModalDiv>
          <DetailModalDivHeader>
            <StyledIcon src={data[0].icon} />
            <DetailModalDescription>
              {data[0].description}
            </DetailModalDescription>
          </DetailModalDivHeader>
          <DetailModalPlateListContainer>
            <DetailModalPlateList color={data[0].color}>
              {data[0].data.map((plate, index) => (
                <li key={index}>{plate}</li>
              ))}
            </DetailModalPlateList>
          </DetailModalPlateListContainer>
        </StyledDetailModalDiv>
      );
    };

    setModalChildren(DetailModalContent);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <InfoGraphicsContainer>
      <LicensePlateGrid>
        {DataSet.map((data) => (
          <div>
            <LicensePlateIcon
              src={data.icon}
              alt={data.name}
              key={data.index}
              onClick={() => handleDetailModalOpen(data.name)}
            />
            <LicensePlateListContainer>
              {data.data.map((plate, index) => (
                <LicensePlateList key={index} color={data.color}>
                  {plate}
                </LicensePlateList>
              ))}
            </LicensePlateListContainer>
          </div>
        ))}
      </LicensePlateGrid>
      <Help onClick={handleHelpModalOpen}>
        <BsFillQuestionOctagonFill />
      </Help>
      <CustomModal
        modalIsOpen={isModalOpen}
        closeModal={() => setIsModalOpen(!isModalOpen)}
        children={modalChildren}
      />

      <StyledNavigation>
        <NavToTitle to={"/"}>{`<- Back to Title`}</NavToTitle>
      </StyledNavigation>
    </InfoGraphicsContainer>
  );
};

export default InfoGraphicsScreen;

const InfoGraphicsContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 3rem 1.5rem;
`;

const LicensePlateGrid = styled.div`
  display: grid;
  max-width: 100%;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2rem;
`;

const LicensePlateIcon = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: 150ms;

  &:hover {
    width: 105%;
    cursor: pointer;
  }
`;

const LicensePlateListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const LicensePlateList = styled.ul`
  color: ${(props) => props.color};
  font-size: calc(0.5vh + 0.5vw);
  letter-spacing: 3px;
  margin: 0;
  padding: 0;
`;

const Help = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  color: white;
  font-size: calc(20px + 0.5vw);
  transition: 150ms;

  &:hover {
    cursor: pointer;
    font-size: calc(24px + 0.5vw);
  }
`;

const StyledHelpModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "CharlesWright";
`;

const StyledDetailModalDiv = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  font-family: "CharlesWright";
`;

const DetailModalDivHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const DetailModalDescription = styled.p`
  margin-left: 1rem;
  font-size: 12px;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

const DetailModalPlateListContainer = styled.div`
  height: 9rem;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: scroll;

  @media (min-width: 901px) {
    height: 13rem;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 10px;
  }
`;

const DetailModalPlateList = styled.ol`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
  color: ${(props) => props.color};
  list-style-position: outside;
`;

const StyledNavigation = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

const NavToTitle = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 150ms;
  &:hover {
    font-size: large;
  }
`;
