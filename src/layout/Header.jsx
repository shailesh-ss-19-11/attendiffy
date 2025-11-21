import React from 'react'

const Header = ({selectedlink}) => {
  return (
    <div>
      <h2>{selectedlink ? selectedlink?.toUpperCase() : "Home"}</h2>
    </div>
  )
}

export default Header