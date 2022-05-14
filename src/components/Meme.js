
import memeImg from "../images/memeimg.png"

export default function Meme(props){
    return(
        <section className="meme--wrapper">
            <div className="meme-img--wrapper">
                <h1 className="up-text">{props.data.upText}</h1>
                <img src={memeImg} alt="" />
                <h1 className="down-text">{props.data.downText}</h1>
            </div>
        </section>
    )
}