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
                <input className={style.barra} type="search" onChange={handleChange} value={name}/>
                <button className={style.botonSearch} onClick={()=>{onSearch(name);setName('')}}>Agregar</button>
            <div className={style.contCreate}>
                <Link to='/formPage'>
                <button className={style.butonCreate}>CREA TU PROPIO AMIGO!!</button>
                </Link>  
            </div>
        </div>
    )
}

export default SearchBar;