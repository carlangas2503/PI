import SearchBar from "../SearchBar/SearchBar";
import Cards from '../Cards/Cards'
import Paginado from '../Paginado/Paginado'
import { useState,useEffect } from "react";
import axios from 'axios'

const items_per_page = 4;


function HomePage({onSearch,characters,onClose,orderByName,deDb}){
    const[datosApi,seDatosApi] = useState([])//Se usa para guardar todos los datos
    const [items,setItems] = useState([].splice(0,items_per_page))//Solo loq ue se va a renderizar por pagina del paginado
    const [currentPage,setCurrentPage] = useState(0)//Pagina actual

    const ordenPaginado = (items,getter,order)=>{
        items.sort((a, b)=>{
        const first = getter(a);
        const second = getter(b);
        const compare = first.localeCompare(second)
        return order? compare: -compare
    })
    return setItems(items)
    }
    useEffect(()=>{
        async function axiosData(){
            const resApi = await axios('http://localhost:3001/dogsRoutes/all')
            if(resApi.data){
                setItems(resApi.data.splice(0,items_per_page))
            }  
        }
        axiosData()
    },[])
    useEffect(()=>{
        async function axiosData(){
            const resApi = await axios('http://localhost:3001/dogsRoutes/all')
            if(resApi.data){
                seDatosApi(resApi.data) 
            }  
        }
        axiosData()
    },[])
    const nextHandler = ()=>{
        const totalEle = datosApi.length
        const nextPage = currentPage + 1
        const firstIndex = nextPage * items_per_page
        if(firstIndex === totalEle) return;
        setItems([...datosApi].splice(firstIndex,items_per_page))
        setCurrentPage(nextPage)
    }
    const prevHandler = ()=>{
        const prevPage = currentPage - 1;
        if(prevPage < 0) return;
        const firstIndex = prevPage * items_per_page;
        setItems([...datosApi].splice(firstIndex,items_per_page))
        setCurrentPage(prevPage)
    }

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            {characters.length > 0?
            <Cards characters={characters} onClose={onClose} orderByName={orderByName} deDb={deDb}/>:
            <Paginado nextHandler={nextHandler} prevHandler = {prevHandler} items={items} currentPage={currentPage} ordenPaginado={ordenPaginado}/>}
        </div>
    )
}

export default HomePage;