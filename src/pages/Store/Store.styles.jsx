import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 24px;
  z-index: 2;
`;
export const HeaderBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const IconBtn = styled.button`
  background: none;
  border: none;
`;
export const Icon = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(42deg)
    brightness(101%) contrast(99%);
`;
export const BookMarkIcon = styled(Icon)`
  width: 45px;
  height: 45px;
`;
export const StoreImgSect = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const StoreImg = styled.img`
  z-index: 0;
  width: 100%;
`;
export const CaeraselItemWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const CaeraselWrapper = styled.div`
  transform: translate(-${(props) => props.imageindex}00vw);
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: row;
`;

export const StoreImgNum = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 60%;
  padding: 4px 12px;
  border-radius: 16px;
`;
export const StoreImgNumSect = styled.div`
  width: 100%;
  position: absolute;
  bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 2;
  align-items: center;
`;

export const Main = styled.main`
  margin-bottom: 200px;
`;

export const DescriptionSect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 20px 24px 20px;
  border-bottom: solid 9px #efefef;
`;

export const MapBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 25px;
  padding: 14px;
  border-radius: 100%;
  background-color: white;
  border: none;
  box-shadow: 0 0 10px;
`;

export const MapIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Header1 = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;
export const Header2 = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;
export const Header3 = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

export const PickSect = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-bottom: solid 9px #efefef;
`;
export const PickHeader3 = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;
export const PickBtn = styled.button`
  background-color: white;
  color: black;
  padding: 7px 11px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border: 1px solid gray;
  border-radius: 24px;
`;
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px 14px 8px;
  background-color: white;
  border-top: 2px lightgray solid;
  z-index: 3;
  gap: 10px;
`;
export const BookMarkBtn = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  align-items: center;
`;
export const BookMarkBtnText = styled.p`
  margin: 0px;
`;
export const BookMarkBtnImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const ReserveBtn = styled.button`
  flex: 1;
  background-color: #eb4f27;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 14px 0;
  border: none;
  border-radius: 8px;
`;

export const CategoryDescription = styled.section``;
export const CategoryBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CategoryBtn = styled.button`
  width: 100%;
  flex: 1;
  background: none;
  padding: 14px 0;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? '600' : '500')};
  border-bottom: 2px solid
    ${(props) => (props.selected ? 'black' : 'lightgray')};
  color: ${(props) => (props.selected ? 'black' : '#949494')};
`;

export const HomeSect = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;
export const HomeBtn = styled.button`
  width: 88%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border: 1px gray solid;
  border-radius: 8px;
  padding: 11px 16px;
  align-items: center;
`;
export const HomeIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const HomeBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const HomeBtnText = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: black;
`;
export const PictureSect = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
`;
export const PictureImg = styled.img`
  width: 33%;
`;
export const ReviewSec = styled.section`
  display: flex;
  flex-direction: column;
`;
export const ReviewDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px lightgray solid;
`;
export const ReviewUserDiv = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const ReviewUserImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const ReviewUserText = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
export const ReviewInformRowDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ReviewInformScoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const ReviewInformScoreText = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: black;
  margin: 0;
`;
export const ReviewInformScoreImg = styled.img`
  width: 12px;
  height: 12px;
`;
export const ReviewInformDateText = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: gray;
  margin: 0;
`;
export const ReviewImgDivWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  position: relative;
  width: 100%;
  margin-left: 20px;
`;
export const ReviewImgDiv = styled.div`
  display: flex;
  position: relative;
  left: 0;
  top: 0;
  flex-direction: row;
  gap: 8px;
`;
export const ReviewImg = styled.img`
  width: 200px;
  height: 200px;
`;
export const ReviewMainDiv = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;
export const ReviewMainText = styled.p`
  margin: 0;
  font-weight: 500;
  color: black;
  font-size: 16px;
`;
export const StoreWrapper = styled.div`
  overflow-x: hidden;
`;
