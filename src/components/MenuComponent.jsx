
    import {Seacrh} from './SearchComponent'
    import styled from 'styled-components';


    const Div = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top:200px;
    `;

    export function MenuComponente(){
        return (

            <Div>
                <Seacrh/>
            </Div>
        )

    }