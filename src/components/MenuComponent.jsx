
    import {Seacrh} from './SearchComponent'
    import styled from 'styled-components';


    const Div = styled.div`
      width: 100%;
      display: flex;
      flex-direction:column;

      h1{
        width: 100%;
        display:flex;
        justify-content:center;
        align-conten:center;
        font-size: 100px;
      }

      div{
        width: 100%;
        display: flex;
        justify-content:center;
        align-conten:center;
      }
    `;

    export function MenuComponente(){
        return (
            <Div>
                <h1>Finder Book</h1>
                <div>
                                      
                    <Seacrh/>
                </div>
            </Div>
        )
    }