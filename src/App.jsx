import  {MenuComponente} from  './components/MenuComponent'
import GlobalProvider from './context/contextGlobal'
import {ListBook} from './components/ListBook'

export function  App(){
    return (
        <GlobalProvider >
            <MenuComponente/>
            <ListBook/>
        </GlobalProvider>
    )
}