import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import backImg from '../../assets/back.svg';
import homeImg from '../../assets/home.svg';
import shareImg from '../../assets/share.svg';
import locationImg from '../../assets/location.svg';
import storeImg from '../../assets/ee45b3f0f27249b3821ff044e4a5ffdd.jpeg';
import store2Img from '../../assets/f4cc8e02-8067-4b31-bfd0-8873981cbfc4.png';
import bookMarkImg from '../../assets/bookmark.svg';
import {
  BookMarkBtn,
  BookMarkBtnImg,
  BookMarkBtnText,
  BookMarkIcon,
  CaeraselItemWrapper,
  CaeraselWrapper,
  CategoryBar,
  CategoryBtn,
  CategoryDescription,
  DescriptionSect,
  Footer,
  Header,
  Header1,
  Header2,
  Header3,
  HeaderBtns,
  Icon,
  IconBtn,
  Main,
  MapBtn,
  MapIcon,
  PickBtn,
  PickHeader3,
  PickSect,
  ReserveBtn,
  StoreImg,
  StoreImgNum,
  StoreImgNumSect,
  StoreImgSect,
} from './Store.styles';

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState('홈');
  const [imageArr, setImageArr] = useState([storeImg, store2Img]);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();
  const nextHandler = () => {
    setImageIndex(() => {
      if (imageIndex === imageArr.length - 1) {
        return 0;
      } else {
        return imageIndex + 1;
      }
    });
  };
  const prevHandler = () => {
    setImageIndex(() => {
      if (imageIndex === 0) {
        return imageArr.length - 1;
      } else {
        return imageIndex - 1;
      }
    });
  };
  return (
    <>
      <Header>
        <HeaderBtns>
          <IconBtn onClick={() => navigate(-1)}>
            <Icon src={backImg} alt='' />
          </IconBtn>
          <IconBtn onClick={() => navigate('/')}>
            <Icon src={homeImg} alt='' />
          </IconBtn>
        </HeaderBtns>
        <HeaderBtns>
          <IconBtn onClick={nextHandler}>
            <BookMarkIcon src={bookMarkImg} alt='' />
          </IconBtn>
          <IconBtn>
            <Icon src={shareImg} alt='' />
          </IconBtn>
        </HeaderBtns>
      </Header>
      <Main>
        <StoreImgSect>
          {/* <StoreImg src={storeImg} alt='' /> */}
          <CaeraselWrapper imageindex={imageIndex}>
            {imageArr.map((image, index) => (
              <CaeraselItemWrapper key={index}>
                <img src={image} alt='' />
              </CaeraselItemWrapper>
            ))}
          </CaeraselWrapper>
          <StoreImgNumSect>
            <StoreImgNum>
              {imageIndex + 1}/{imageArr.length}
            </StoreImgNum>
          </StoreImgNumSect>
        </StoreImgSect>
        <DescriptionSect>
          <Header1>음식점 이름</Header1>
          <Header2>음식점 소개</Header2>
          <Header3>음식 종류,지역</Header3>
          <Header3>☆ X.X (XX)</Header3>
          <MapBtn>
            <MapIcon src={locationImg} alt='' />
          </MapBtn>
        </DescriptionSect>
        <PickSect>
          <PickHeader3>레스토랑 함께 고르기</PickHeader3>
          <PickBtn>+ 담기</PickBtn>
        </PickSect>
        <CategoryDescription>
          <CategoryBar>
            <CategoryBtn
              onClick={() => setSelectedCategory('홈')}
              selected={selectedCategory === '홈'}
            >
              홈
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('메뉴')}
              selected={selectedCategory === '메뉴'}
            >
              메뉴
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('사진')}
              selected={selectedCategory === '사진'}
            >
              사진(10)
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('리뷰')}
              selected={selectedCategory === '리뷰'}
            >
              리뷰(25)
            </CategoryBtn>
          </CategoryBar>
        </CategoryDescription>
      </Main>
      <Footer>
        <BookMarkBtn>
          <BookMarkBtnImg src={bookMarkImg} alt='' />
          <BookMarkBtnText>563</BookMarkBtnText>
        </BookMarkBtn>
        <ReserveBtn>예약하기</ReserveBtn>
      </Footer>
      <Outlet />
    </>
  );
}
