import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import { getBook } from '../../services/books';

import Info from './Info';
import GeneralScore from './GeneralScore';
import Scores from './Scores';
import Extra from './Extra';

function BookDetails() {

    const { isbn } = useParams();
    const [book, setBook] = useState({ isbn: null });



    useEffect(() => {
        const loadBook = async () => {
            const response = await getBook(isbn)
            setBook(response)
            
        }

        loadBook();
    }, [isbn])

    return (
        <div>
            {book.isbn && (
                <Container>
                    <Info book={book} />
                    <GeneralScore book={book}/>
                    <Scores book={book}/>
                    <Extra book={book}/>
                </Container>
            )}
        </div>
    )
}

export default BookDetails