import { ScheduleTitle } from '../styled/BookingDataStyled';
import {
  ContainerCustomers,
  CardsCustomers,
  Image,
  Img,
  GreenIcon,
  RedIcon,
} from '../styled/CustomersStyled';
import { Content } from '../styled/TopBarStyled';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person from '../assets/person.jpg';
import { useState } from 'react';
import { Modal } from './modal';
import { useTypedSelector } from '../app/store';
import React from 'react';
import { IonIcon } from '@ionic/react';

export const Customers = ({ showTitle }) => {
  const sideBarActivated: boolean = useTypedSelector(
    (state) => state.sidebar.activated,
  );
  const [showModal, setShowModal] = useState(false);
  const [showUserReview, setShowUserReview] = useState(null);
  const reviews = [
    { name: 'Kusnaidi Anderson', src: person },
    { name: 'Lucas Venetti', src: person1 },
    { name: 'Kusnaidi Anderson', src: person2 },
  ];

  const ShowModalReview = (review) => {
    setShowModal(true);
    setShowUserReview(review);
  };

  return (
    <Content sideBarActivated={sideBarActivated}>
      {showTitle && <ScheduleTitle>Latest Review by Customers</ScheduleTitle>}
      {showModal && (
        <Modal user={showUserReview} closeModal={() => setShowModal(false)} />
      )}

      <CardsCustomers>
        <ContainerCustomers>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <Image>
            <Img src={reviews[0].src} width={100} height={100} alt="sea" />
            <div>
              <p>{reviews[0].name}</p>
              <GreenIcon>
                <IonIcon
                  onClick={() => ShowModalReview(reviews[0])}
                  name="checkmark-circle-outline"
                ></IonIcon>
              </GreenIcon>
              <RedIcon>
                <IonIcon
                  onClick={() => ShowModalReview(reviews[0])}
                  name="close-circle-outline"
                ></IonIcon>
              </RedIcon>
            </div>
          </Image>
        </ContainerCustomers>
        <ContainerCustomers>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Image>
            <Img src={reviews[1].src} width={100} height={100} alt="sea" />
            <div>
              <p>{reviews[1].name}</p>
              <GreenIcon>
                <IonIcon
                  onClick={() => ShowModalReview(reviews[1])}
                  name="checkmark-circle-outline"
                ></IonIcon>
              </GreenIcon>
              <RedIcon>
                <IonIcon
                  onClick={() => ShowModalReview(reviews[1])}
                  name="close-circle-outline"
                ></IonIcon>
              </RedIcon>
            </div>
          </Image>
        </ContainerCustomers>
        <ContainerCustomers>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Image>
            <Img src={reviews[2].src} width={100} height={100} alt="sea" />
            <div>
              <p>{reviews[2].name}</p>
              <GreenIcon>
                <IonIcon
                  onClick={() => ShowModalReview(reviews[2])}
                  name="checkmark-circle-outline"
                ></IonIcon>
              </GreenIcon>
              <RedIcon>
                <IonIcon
                  onClick={() => ShowModalReview(reviews[2])}
                  name="close-circle-outline"
                ></IonIcon>
              </RedIcon>
            </div>
          </Image>
        </ContainerCustomers>
      </CardsCustomers>
    </Content>
  );
};
