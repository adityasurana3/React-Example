import React from 'react'

function Header() {
  console.log('Header Rendered');
  
    
  return (
    <h1>Header</h1>
  )
}

// export default Header;
export default React.memo(Header)
