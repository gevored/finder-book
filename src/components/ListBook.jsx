
import  {useContext} from 'react'
import {ContextGlobal} from '../context/contextGlobal'
import {BookField} from './BookField'

import styled from 'styled-components';

const DivContainer = styled.div`
    display:grid;
    margin-top: 20vh;
    grid-template-columns:repeat(2,1fr);
    margin-left:20px;
`;

export function ListBook(){

    const {listBooks, _} = useContext(ContextGlobal)

    return (
        <DivContainer>
            {
                listBooks.map(book =>{
                   return( <BookField 
                    key = {book.id} 
                    title = {book.volumeInfo.title}
                    image = {book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail}
                    />)
                })
            }
        </DivContainer>
    )
}