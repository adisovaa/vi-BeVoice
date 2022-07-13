import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Key from "./components/key/key"
import {Component, createRef} from "react";

function App() {

  const myRef = createRef()

  let msg = new SpeechSynthesisUtterance()
  let voices = speechSynthesis.getVoices()
  msg.voice = voices[0]
  msg.voiceURI = "native"
  msg.volume = 1
  msg.rate = 1
  msg.pitch = 0.8
  msg.lang = 'ru-RU'

  let tags = document.querySelectorAll('div,p,a,h1,h2,h3');
  tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
      msg.text = e.target.innerText
      speechSynthesis.speak(msg)

      let interval = setInterval(() => {
        if(!speechSynthesis.speaking){
          tag.style.removeProperty('background-color')
          clearInterval(interval)
        }
      }, 10)
    })
  })

  const moveFocus = () => {
    const node = myRef.current
    node.addEventListener('keydown', function(e) {
      const active = document.activeElement;
      if(e.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if(e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    })
  }


  return (
    <div className="App" ref={myRef}>
      <MainPage/>
      <Component/>
      <Key/>
    </div>
  )
}

export default App;

