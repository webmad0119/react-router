// components/About.js

import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {
          name: 'Batman',
          year: 1999,
          id: 1
        },
        {
          name: 'Superman',
          year: 2006,
          id: 2
        },
        {
          name: 'Rocky Horror Picture Show',
          year: 1978,
          id: 3
        }
      ]

    }
  }

  render() {
    let selectedMovie = this.state.movies.filter((movie) => {
      return movie.id === +this.props.match.params.id
    })

    const sectionHeader = <React.Fragment><h3>About</h3><p>Welcome to the about section</p></React.Fragment>

    if (selectedMovie.length === 0) {
      return (
        <div>
          {sectionHeader}

          <h1>Not found</h1>
        </div>
      )
    } else {
      return (
        <div>
          {sectionHeader}

          <p>Your chosen movie is '{selectedMovie[0].name}'</p>

          {this.props.match.params.year && <React.Fragment>Movie was made the year {selectedMovie[0].year}</React.Fragment>}
        </div>
      )
    }
  }
}

export default About;