import React from "react";
import styled from "styled-components";
import Vulgar from "../assets/images/1x/Vulgar.png";
import Slang from "../assets/images/1x/Slang.png";
import Sexual from "../assets/images/1x/Sexual.png";
import SwearWord from "../assets/images/1x/SwearWord.png";
import Negative from "../assets/images/1x/Negative.png";
import Police from "../assets/images/1x/Police.png";
import Deleted from "../assets/images/1x/Deleted.png";

const InfoGraphicsScreen = () => {
  const DataSet = [
    {
      icon: Vulgar,
      name: "Vulgar",
      color: "#9F00EA",
      data: [
        "DAVES88",
        "DMOBGFY",
        "EGGPUTT",
        "F DIABDZ",
        "FJ 666",
        "FKK OFF",
        "FKN BLAK",
        "FLT ATCK",
        "F LUPUS",
        "HVNNHEL",
        "H8DES",
        "ILL NKA",
        "JIMENZ5",
        "KISMI S",
        "LHGLA88",
        "MMA515O",
        "MTN SCAT",
        "OAK KLAN",
        "POT POM",
        "SHTYMNI",
        "1MONGO",
        "173D82D",
        "707IRON",
        "MI HYNA",
        "DAD$PP",
        "GAMMI$G",
        "G$DSKK",
        "FN2IB7",
        "FRESD18",
        "KILLAHB",
        "KILLAHW",
        "NO GAS X",
        "TTNISMO",
        "88 VERT",
        "HB 707",
        "ELIKA13",
        "CRPLHLR",
        "CRPPL4X",
      ],
    },
    {
      icon: Slang,
      name: "Slang",
      color: "#FFC517",
      data: [
        "BRUJO 13",
        "C4 MILES",
        "GUN4HYR",
        "LILBLKB",
        "MZ MOLY",
        "OG PLAY",
        "OG RICE",
        "OVOGANG",
        "RAJO42O",
        "RMBO562",
        "RSPEC13",
        "UBRS 51O",
        "619 BSBL",
        "13$GRAM",
        "H84BY4Z",
        "MRDRVAN",
        "TOPNUGS",
        "U 2 HIGH",
        "2BG NUGZ",
        "BBONGCO",
        "F1OO183",
        "RBN 88",
        "REDLYNE",
        "14 FLEX",
        "IH8IED",
        "GAZ1969",
      ],
    },
    {
      icon: Sexual,
      name: "Sexual",
      color: "#FF00EA",
      data: [
        "CHERIPI",
        "PSYCDVA",
        "PSYKD",
        "67 PINK",
        "CAN BITE",
        "1FD MOM",
        "DATT ASS",
        "DNKY PCH",
        "FSH BALL",
        "OPNWIDE",
        "OR DX",
        "YR ONE69",
        "69TRIKE",
        "GIGGEDY",
        "69CRZIN",
        "FISH HRD",
        "A QUIKI",
      ],
    },
    {
      icon: SwearWord,
      name: "SwearWord",
      color: "#FF6600",
      data: [
        "BAD FN68",
        "DAAFAK",
        "FCUK BOI",
        "F OMG",
        "LYFISHT",
        "YBEAZZY",
        "2BUCK U",
        "BTCNBLK",
        "HAWT DAM",
      ],
    },
    {
      icon: Negative,
      name: "Negative",
      color: "#FF1400",

      data: [
        "CIO FTW",
        "DOITFKR",
        "LCPSY18",
        "NAVA 14",
        "RJ X 88",
        "ROAK14",
        "VTARDED",
        "1LOWPIG",
      ],
    },
    {
      icon: Police,
      name: "Police",
      color: "#003FFE",
      data: ["PORKS15", "ROBO 911"],
    },
    { icon: Deleted, name: "Deleted", color: "#D00000", data: [] },
  ];

  return (
    <InfoGraphicsContainer>
      <LicensePlateGrid>
        {DataSet.map((data) => (
          <div>
            <LicensePlateIcon
              src={data.icon}
              alt={data.name}
              key={data.index}
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
  gap: 1rem;
`;

const LicensePlateIcon = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
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
  margin: 0;
  padding: 0;
`;
