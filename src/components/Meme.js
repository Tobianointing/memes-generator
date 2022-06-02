export default function Meme(props) {
  return (
    <section className="meme--wrapper">
      <div className="meme-img--wrapper">
        <h1 className="meme--text up-text">{props.data.upText}</h1>
        <img id="img" src={props.randomMeme} alt="" />
        <h1 className="meme--text down-text">{props.data.downText}</h1>
      </div>
    </section>
  )
}
