
import './modalComponent.css';

export const ModalComponent = ({ isOpen, onClose, sizeHeight, sizeWidth, like, date, description, sendInfo, onDescriptionChange }) => {
    return (
        <form open={isOpen} onSubmit={sendInfo}>
            <dialog className="content__popup" open={isOpen}>
            <div className="popup">
                <span className="material-symbols-outlined close" onClick={onClose}>
                    close
                </span>
                <div className="content__popup__icons">
                    <p className='content__popup__icon'><span className="material-symbols-outlined">favorite</span> {like}</p>
                    <p className='content__popup__icon'><span className="material-symbols-outlined">height</span> {sizeHeight}</p>
                    <p className='content__popup__icon'><span className="material-symbols-outlined">width</span> {sizeWidth}</p>
                    <p className='content__popup__icon'><span className="material-symbols-outlined">calendar_month</span> {date}</p>
                    
                    
                    <input 
                        className="popupInput" 
                        type="text" 
                        placeholder={description}
                        onChange={(e) => onDescriptionChange(e.target.value)}
                    />
                <button className='popupButton'>save</button>
                </div>
            </div>
        </dialog>
        </form>
    );
};

