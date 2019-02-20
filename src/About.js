// components/About.js

import React from 'react';

const about = (props) => {

  let movies = [
    {
      name: 'a',
      id: 1
    },
    {
      name: 'b',
      id: 2
    },
    {
      name: 'c',
      id: 3
    }
  ]

  let selectedMovie = movies.filter((movie) => {
    return movie.id === +props.match.params.id
  })
    
  return (
    <div>
        <h3>About</h3>

        <p>Tu película seleccionada es '{selectedMovie[0].name}'</p>
        
        <p>Me has pasado un {props.match.params.id}</p>
        <p>Me has pasado un order {props.match.params.order}</p>
    </div>
  )
}

export default about;