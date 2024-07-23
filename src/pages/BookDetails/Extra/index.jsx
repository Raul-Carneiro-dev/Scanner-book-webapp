import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function Extra({ book }) {
  return (
      <>
          <Container>
            <span className="title">Tecnologias</span>
            <p>{book.tecnologies && book.tecnologies.join(', ')}</p>
          </Container>
          <Container>
            <span className="title">Requisitos</span>
            <p>{book.requirements && book.requirements.join(', ')}</p>
          </Container>
          <Container>
            <span className="title">Tecnologias</span>
            <p>{book.description}</p>
          </Container>
      </>
  )
}

Extra.propTypes = {
    book: PropTypes.shape({
        description: PropTypes.string.isRequired,
        tecnologies: PropTypes.arrayOf(PropTypes.string),
        requirements: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default Extra