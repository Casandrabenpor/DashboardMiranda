import { ContainerModal ,ModalBackground } from "../styled/ModalStyled";
import { Image, Img, GreenIcon, RedIcon } from '../styled/CustomersStyled';
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person from "../assets/person.jpg";

export const Modal = ({ closeModal, closeModal2, text, imageSrc, name }) => {

  
    return (
        <ModalBackground >
            <ContainerModal onClick={closeModal}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <Image>
                    <Img src={person} width={100} height={100} alt="sea" />
                    <div>
                        <p>Kusnaidi Anderson</p>
                        <GreenIcon>
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </GreenIcon>
                        <RedIcon>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </RedIcon>
                    </div>
                </Image>
            </ContainerModal>
            {/* <ContainerModal onClick={closeModal2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <Image>
                    <Img src={person1} width={100} height={100} alt="sea" />
                    <div>
                        <p>Kusnaidi Anderson</p>
                        <GreenIcon>
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </GreenIcon>
                        <RedIcon>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </RedIcon>
                    </div>
                </Image>
            </ContainerModal> */}
            {/* <ContainerModal onClick={() => props.closeModal()}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
             
             <Image>
                 <Img src={person2} width={100} height={100} alt="sea" />
                 <div>
                     <p>Kusnaidi Anderson</p>
                     <GreenIcon>
                         <ion-icon name="checkmark-circle-outline"></ion-icon>
                     </GreenIcon>
                     <RedIcon>
                         <ion-icon name="close-circle-outline"></ion-icon>
                     </RedIcon>
                 </div>
             </Image>
   </ContainerModal> */}
        </ModalBackground >

    );
};