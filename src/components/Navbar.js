import trollFace from "../images/trollface.svg"


export default function Navbar(){
    return(
        <nav className="nav">
            <img className="logo--img" src={trollFace} alt=""/>
            <h1 className="logo--title">Meme Generator</h1>
            <h4 className="logo--sub-title">React Course - Project 3</h4>
        </nav>
    )
}