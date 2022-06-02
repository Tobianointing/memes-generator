import MemeForm from "./MemeForm"
import Meme from "./Meme"
import React from "react"
import html2canvas from "html2canvas"

export default function Main() {
  const [formData, setFormData] = React.useState({})
  const [memes, setMemes] = React.useState(["https://i.imgflip.com/1yxkcp.jpg"])

  const [randomMeme, setRandomMeme] = React.useState(
    "https://i.imgflip.com/1yxkcp.jpg"
  )

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  React.useEffect(function () {
    let memes = []

    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        data.data.memes.forEach((elem) => memes.push(elem.url))
        setMemes(memes)
      })
  }, [])

  function getRandomMeme() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    return randomMeme
  }

  function handleClick(e) {
    e.preventDefault()
    setRandomMeme(getRandomMeme())
  }

  function handleDownload() {
    const imgWrapper = document.querySelector(".meme-img--wrapper")

    html2canvas(imgWrapper, {
      logging: true,
      useCORS: true,
      letterRendering: 1,
    }).then((canvas) => {
      const base64img = canvas.toDataURL("image/png")
      const anchor = document.createElement("a")
      anchor.setAttribute("href", base64img)
      anchor.setAttribute("download", "meme.png")
      anchor.click()
      anchor.remove()
    })
  }

  return (
    <main>
      <MemeForm onChange={handleChange} onClick={handleClick} />
      <Meme randomMeme={randomMeme} data={formData} />
      <div className="download--div">
        <button className="download--btn" onClick={handleDownload}>
          Download Meme
        </button>
      </div>
    </main>
  )
}
