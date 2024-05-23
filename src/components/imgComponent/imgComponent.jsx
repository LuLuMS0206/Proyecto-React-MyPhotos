import { saveAs } from 'file-saver'
import './imgComponent.css'

export const ImgComponent = (props) => {
console.log(props)
    return (
        <div>
            <img className="img__contentImage" src={props.image} />
            <div className='img__contentIcons'>
                <span className="material-symbols-outlined img__contentIcons__star">
                    star
                </span>
            
            
                <span onClick={()=>saveAs(props.image) } className="material-symbols-outlined">
                    download
                </span>
            
                
                
            </div>
        </div>
    )
}