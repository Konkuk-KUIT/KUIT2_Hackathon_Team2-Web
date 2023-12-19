import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './ReservationCalendar.css';
import styled from 'styled-components';
import moment from 'moment';
import BottomSheet from '../BottomSheet/BottomSheet';
import { useNavigate } from 'react-router';

const ReservationCalender = () => {
  const [value, onChange] = useState(new Date());
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(1);
  const navigate = useNavigate();
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };
  const TodayButtonClick = () => {
    const today = new Date();
    onChange(today);
  };
  return (
    <BottomSheet heightPer={85}>
      <ReservationContainer>
        <Reservation>
          <TodayButton onClick={() => TodayButtonClick(value)}>
            오늘
          </TodayButton>
          <Calendar
            onChange={onChange}
            value={value}
            next2Label={null}
            prev2Label={null}
            formatDay={(loacle, date) => moment(date).format('D')}
          />
          <Line></Line>
          <ReservationPeopleContainer>
            <ReservationPeople>
              {[...Array(10)].map((_, index) => (
                <PeopleButton
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  isActive={selectedButtonIndex === index}
                >
                  {index + 1}명
                </PeopleButton>
              ))}
            </ReservationPeople>
          </ReservationPeopleContainer>
          <ReservationTime onClick={() => navigate('/store/2/reservation2')}>
            <TimeButton>오후 x:xx</TimeButton>
          </ReservationTime>
          <CloseButton onClick={() => navigate(-1)}>닫기</CloseButton>
        </Reservation>
      </ReservationContainer>
    </BottomSheet>
  );
};

export default ReservationCalender;

const TodayButton = styled.button`
  position: absolute;
  left: 35px;
  top: 35px;
  border: none;
  background-color: #fff;
  text-decoration: underline;
  color: #eb4f27;
  font-size: 14px;
  font-weight: 500;
`;

const ReservationPeopleContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 24px;
`;
const ReservationContainer = styled.div`
  width: 100%;
  border-radius: 24px;
`;
const Reservation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ReservationPeople = styled.div`
  display: flex;
  margin-left: 15px;
  position: relative;
`;

const Line = styled.div`
  width: 90%;
  border-top: 1px solid #a0a096;
  margin-top: 20px;
  margin-bottom: 15px;
`;
const ReservationTime = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  padding: 15px;
  margin-left: 40px;
`;

const CloseButton = styled.button`
  width: 329px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 36px;
  cursor: pointer;
`;

const PeopleButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#eb4f27' : '#fff')};
  margin: 10px;
`;
const TimeButton = styled.button`
  width: 82px;
  height: 39px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #eb4f27;
  margin-bottom: 15px;
`;
