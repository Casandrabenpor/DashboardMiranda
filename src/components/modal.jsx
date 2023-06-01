import { ContainerModal ,ModalBackground } from "../styled/ModalStyled";
import { Image, Img, GreenIcon, RedIcon } from '../styled/CustomersStyled';

export const Modal = ({ closeModal, user }) => {

  
    return (
        <ModalBackground >
            <ContainerModal onClick={closeModal}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <Image>
                    <Img src={user.src} width={100} height={100} alt="sea" />
                    <div>
                        <p>{user.name}</p>
                        <GreenIcon>
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </GreenIcon>
                        <RedIcon>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </RedIcon>
                    </div>
                </Image>
            </ContainerModal>
        </ModalBackground >

    );
};