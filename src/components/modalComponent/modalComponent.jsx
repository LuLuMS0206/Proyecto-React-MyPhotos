import './modalComponent.css'; 

export const ModalComponent = ({ isOpen, onClose }) => {
    return (
        <dialog className="content__popup" open={isOpen}>
            <div className="popup">
                <span className="material-symbols-outlined close" onClick={onClose}>
                    close
                </span>
            
                <img src="" alt="" />
                <div className="content__popup__icon">
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    <span className="material-symbols-outlined">
                        height
                    </span>
                    <span className="material-symbols-outlined">
                        width
                    </span>
                    <span className="material-symbols-outlined">
                        calendar_month
                    </span>
                    <input className="popupInput" type="text" />
                    <button className="popupSubmitBtn" type="submit" id="popupSubmitBtn">Guardar Descripción</button>
                </div>
            </div>
        </dialog>
    );
};
