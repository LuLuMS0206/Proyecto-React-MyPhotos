import './imgComponent.css'

export const ImgComponent = (props) => {

    return (

        <div className="img__content">
            <img className="img__contentImage" src={props.image} />
        </div>

    )
}