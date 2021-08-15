import styled from 'styled-components';

const DivBook = styled.div`
    h1{
        font-size : 17px;
    }
`

export function BookField(props){
    return(
        <DivBook>
            <h1>{props.title}</h1>
            <img src={props.image} alt="" />
        </DivBook>
    )
}