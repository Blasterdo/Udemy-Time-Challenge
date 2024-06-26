import { useState, useRef } from "react";

export default function Player() {
  const enteredName = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState()


  function handleClick() {
    setEnteredPlayerName(enteredName.current.value)
    enteredName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unkown entitiy'}</h2>
      <p>
        <input ref={enteredName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
