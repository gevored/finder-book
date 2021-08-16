
import styled from 'styled-components'
import {useContext, useState,} from 'react'
import axios from 'axios'
import {ContextGlobal} from '../context/contextGlobal'


const DivSearch = styled.div`

  width: 100%;

`

const InputSeacr = styled.input`
    width: 50%;
    height: 40px;
    border-radius: 20px ;
    outline: none;

    box-sizing: content-box;
    background-image: url('https://www.w3schools.com/css/searchicon.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    font: 20px Arial, sans-serif;
    padding-left:40px;

    ~ select{
      position:absolute;
      margin-left:0;
    }
`
export function Seacrh(){

  const {listBooks, setListBooks} = useContext(ContextGlobal)

  const [inputField , setInputField] = useState('')

  async function handleInputValueSearch(key){

    if(key === 'Enter'){
     //alert(`testando:${inputField}`)
      console.log('teste')
      const request = await axios({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes?q=${inputField}&key=AIzaSyBTotKddrqB5Uu20gWAR96-FOV7Vpr-AWI`,
       
      })
      setListBooks(request.data.items)
    }
  } 

    return(
      <DivSearch>
          <InputSeacr 
          placeholder = 'Autor, nome do livro e etc...' 
          value= {inputField}
          onChange =  {(e) => {setInputField(e.target.value)}}
          list = "cars"
          onKeyDown = {(e) =>{handleInputValueSearch(e.key )}}
          />
      </DivSearch>
    )
}