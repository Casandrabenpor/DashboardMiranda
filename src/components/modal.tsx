import { ContainerModal, ModalBackground } from '../styled/ModalStyled';
import { Image, Img, GreenIcon, RedIcon } from '../styled/CustomersStyled';
import React from 'react';
import { IonIcon } from '@ionic/react';
interface ModalProps {
  closeModal: () => void;
  user: { name: string; src: string };
}

export const Modal = ({ closeModal, user }: ModalProps) => {
  return (
    <ModalBackground>
      <ContainerModal onClick={closeModal}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <Image>
          <Img src={user.src} width={100} height={100} alt="sea" />
          <div>
            <p>{user.name}</p>
            <GreenIcon>
              <IonIcon name="checkmark-circle-outline" />
            </GreenIcon>
            <RedIcon>
              <IonIcon name="close-circle-outline" />
            </RedIcon>
          </div>
        </Image>
      </ContainerModal>
    </ModalBackground>
  );
};
