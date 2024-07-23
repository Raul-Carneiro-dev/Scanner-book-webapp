import React from 'react'
import PropTypes from 'prop-types'

import { Container, Score, Value } from './styles'

import { calculateScore } from '../../../services/books'

function Scores({ book }) {

    return (
        <Container>
            {book.scores && book.scores.map((score) => (
                    <Score key={score.id} scoreColor={calculateScore(score.value).color}>
                        <Value scoreColor={calculateScore(score.value).color}>
                            <span className='value'>{score.value}</span>
                        </Value>
                        <span className='label'>{score.name}</span>
                    </Score>
            ))}
        </Container>
    )
}

Scores.propTypes = {
    book: PropTypes.shape({
        scores: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                value: PropTypes.number.isRequired
            })
        )
    }).isRequired,
};

export default Scores;