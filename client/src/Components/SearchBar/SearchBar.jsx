import {useState} from 'react'
import {Link} from 'react-router-dom'
import style from './SearchBar.module.css'
function SearchBar({onSearch}) {
    const [name,setName] = useState('')

    const handleChange = (event)=>{
        setName(event.target.value)
    }
    return(
        <div className={style.container}>
            <h3>Busca a tu Amigo!!</h3>
            <input type="search" onChange={handleChange} value={name}/>
            <button onClick={()=>{onSearch(name);setName('')}}>Agregar</button>
            <Link to='/formPage'>
            <button>CREA TU PROPIO AMIGO!!</button>
            </Link>
        </div>
    )
}

export default SearchBar;