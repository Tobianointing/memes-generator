
import memeImg from "../images/memeimg.png"

export default function Meme(){
    return(
        <section className="meme--wrapper">
            <div className="meme-img--wrapper">
                <h1 className="up-text">SHUT UP</h1>
                <img src={memeImg} alt="" />
                <h1 className="down-text">AND TAKE THE MONEY</h1>
            </div>
        </section>
    )
}