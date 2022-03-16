// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Extra credit 1
// function Box({className = '', style, ...props}) {
//   return (
//     <div
//       className={`box ${className}`.trim()}
//       style={{fontStyle: 'italic', ...style}}
//       {...props}
//     ></div>
//   )
// }

// Extra credit 2
function Box({size, style, ...props}) {
  let sizeClassName = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${sizeClassName}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    ></div>
  )
}

// const smallBox = (
//   <div
//     // 🐨 add a className prop to each div and apply the correct class names
//     // based on the text content
//     className={'box box--small'}
//     // 🐨 add a style prop to each div so their background color
//     // matches what the text says it should be
//     // 🐨 also use the style prop to make the font italic
//     style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className={'box box--medium'}
//     style={{fontStyle: 'italic', backgroundColor: 'pink'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className={'box box--large'}
//     style={{fontStyle: 'italic', backgroundColor: 'orange'}}
//   >
//     large orange box
//   </div>
// )

// Extra credit 1
// const smallBox = (
//   <Box className={'box--small'} style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </Box>
// )
// const mediumBox = (
//   <Box className={'box--medium'} style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )
// const largeBox = (
//   <Box className={'box--large'} style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

// Extra credit 2
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
