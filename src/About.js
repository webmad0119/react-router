// components/About.js

import React from 'react';

const about = (props) => {
    
  return (
    <div>
        <h3>About</h3>
        <p>Me has pasado un {props.match.params.id}</p>
        <p>Me has pasado un order {props.match.params.order}</p>
    </div>
  )
}

export default about;