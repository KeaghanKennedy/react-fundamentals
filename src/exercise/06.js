// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // Extra credits 1, 2, 3
  const usernameInputRef = React.useRef()

  //  Extra credit 2
  // const [error, setError] = React.useState(null)

  // Extra credit 3
  const [username, setUsername] = React.useState('')

  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    event.preventDefault()
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // const username = event.target.elements.usernameInput.value

    // Extra credit 1, 2
    // const username = usernameInputRef.current.value

    // 🐨 Call `onSubmitUsername` with the value of the input
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    //  Extra credit 2
    // const isLowerCase = value === value.toLowerCase()
    // setError(isLowerCase ? null : 'Username must be lower case')

    // Extra credit 3
    const validValue = value.toLowerCase()
    setUsername(validValue)
  }

  return (
    // 🐨 add the onSubmit handler to the <form> below
    <form onSubmit={handleSubmit}>
      <div>
        {/* 🐨 make sure to associate the label to the input. // to do so, set
        the value of 'htmlFor' prop of the label to the id of input */}
        <label htmlFor="usernameInput">Username:</label>
        {/* <input type="text" id="usernameInput" /> */}

        {/* Extra credit 1 */}
        {/* <input type="text" id="usernameInput" ref={inputRef} /> */}

        {/* Extra credit 2 */}
        <input
          type="text"
          id="usernameInput"
          // Extra credit 3
          value={username}
          ref={usernameInputRef}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        // Extra credit 2
        // disabled={Boolean(error)}
      >
        Submit
      </button>

      {/* Extra credit 2 */}
      {/* {error && (
        <div style={{color: 'red'}} role="alert">
          {error}
        </div>
      )} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
