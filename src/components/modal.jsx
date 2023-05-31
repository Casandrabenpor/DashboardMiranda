export const Modal = (props) =>{
    return (
        <div onClick={() => props.closeModal()}>
            <p>Soy Modal</p>
        </div>
    );
};