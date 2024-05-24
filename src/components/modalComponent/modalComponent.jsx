
import './modalComponent.css';

export const ModalComponent = ({ isOpen, onClose, sizeHeight, sizeWidth, like, date, description }) => {
    return (
        <dialog className="content__popup" open={isOpen}>
            <div className="popup">
                <span className="material-symbols-outlined close" onClick={onClose}>
                    close
                </span>
                {/* <img src={image} alt="content" className="popup__image" /> */}
                <div className="content__popup__icon">
                    <p><span className="material-symbols-outlined">favorite</span> {like}</p>
                    <p><span className="material-symbols-outlined">height</span> {sizeHeight}</p>
                    <p><span className="material-symbols-outlined">width</span> {sizeWidth}</p>
                    <p><span className="material-symbols-outlined">calendar_month</span> {date}</p>
                    <p>{description}</p>
                    <input className="popupInput" type="text" placeholder="Edit description" />
                    <button className="popupSubmitBtn" type="submit" id="popupSubmitBtn">Guardar Descripción</button>
                </div>
            </div>
        </dialog>
    );
};
