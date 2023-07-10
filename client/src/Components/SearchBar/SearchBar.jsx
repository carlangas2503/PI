import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import style from './SearchBar.module.css'
import axios from 'axios'
function SearchBar({onSearch}) {
    const [name,setName] = useState('')
    const [filtrado,setFiltrado] = useState([])
    const [render,setRender] = useState('')
    const [noVer,setNover] = useState(true)
    useEffect(()=>{
        async function axiosData(){
            const resApi = await axios('http://localhost:3001/dogsRoutes/all')
            if(resApi.data){
                setFiltrado(resApi.data)
            }  
        }
        axiosData()
    },[])

    const takeValue = ()=>{
        setName(render[0].name)
        setNover(false)
    }
    const takeValue1 = ()=>{
        setName(render[1].name)
        setNover(false)
    }
    const takeValue2 = ()=>{
        setName(render[2].name)
        setNover(false)
    }
    const takeValue3 = ()=>{
        setName(render[3].name)
        setNover(false)
    }
    const handleChange = (event)=>{
        setName(event.target.value)
        filtrar(event.target.value)
        if(!event.target.value) return setNover(false)
        setNover(true)
    }
    const filtrar = (termino)=>{
        const ayu = filtrado?.filter((ele) =>{
            if(ele.name.toString().toLowerCase().includes(termino.toLowerCase())){
                return ele.name
            }
        })
        return setRender(ayu)
    }
    return(
        <div className={style.container}>
            <h3>Busca a tu Amigo!!</h3>
                <input className={style.barra} type="search" onChange={handleChange} value={name}/>
                <button className={style.botonSearch} onClick={()=>{onSearch(name);setName('')}}>Agregar</button>
                {noVer?<div className={style.contAyu}>
                    {render[0]?<p value={render[0].name} className={style.ayuBuscador} onClick={(eve)=>{takeValue(eve);}}>{render[0].name}</p>:null}
                    {render[1]?<p  className={style.ayuBuscador} onClick={(eve)=>{takeValue1(eve);}}>{render[1].name}</p>:null}
                    {render[2]?<p  className={style.ayuBuscador} onClick={(eve)=>{takeValue2(eve);}}>{render[2].name}</p>:null}
                    {render[3]?<p  className={style.ayuBuscador} onClick={(eve)=>{takeValue3(eve);}}>{render[3].name}</p>:null}
                </div>:null}
                
            <div className={style.contCreate}>
                <Link to='/formPage'>
                <button className={style.butonCreate}>CREA TU PROPIO AMIGO!!</button>
                </Link>  
            </div>
        </div>
    )
}

export default SearchBar;