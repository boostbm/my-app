import React from 'react'

function ModeToggler() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is on</h1>;
  const lightMode = <h1>Light Mode is on</h1>;


function handleClick() {
  darkModeOn = !darkModeOn;
}

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default ModeToggler