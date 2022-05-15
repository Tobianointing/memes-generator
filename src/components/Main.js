import MemeForm from "./MemeForm"
import Meme from "./Meme"
import React from "react"

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

  return (
    <main>
      <MemeForm onChange={handleChange} onClick={handleClick} />
      <Meme randomMeme={randomMeme} data={formData} />
    </main>
  )
}
