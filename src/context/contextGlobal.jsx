
import React ,{useState} from 'react'


export const ContextGlobal = React.createContext([])

export default function GlobalProvider({children}){

    const [listBooks, setListBooks] = useState([])

    return (
    <ContextGlobal.Provider  value = {{listBooks, setListBooks}}>
        {children}
    </ContextGlobal.Provider>
    )
}
