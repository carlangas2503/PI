import { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {getTemperamentos} from '../../redux/actions'
import axios from "axios";
import style from './Formpage.module.css'
import {validate,
    validate_Nombres,
    validate_Altura_min,
    validate_Altura_max,
    validate_Peso_min,
    validate_Peso_max,
    validate_Años_de_vida,} from './Validation.js'
import {Link} from 'react-router-dom'


function FormPage() {
    const dispatch = useDispatch()
    const temper = useSelector((state)=>state.temperamentos?.sort())
    const [ createDog, setCreateDog ] = useState({
        Imagen:"",
        Nombre:"",
        Altura_min:"",
        Altura_max:"",
        Peso_min:"",
        Peso_max:"",
        Años_de_vida:"",
        Temperamento:[],
    })
    const[ errorsNombre, setErrorsNombre ] = useState("")
    const[ errorsImagen, setErrorsImagen ] = useState("")
    const[ errorAlturaMin, setErrorAlturaMin ] = useState("")
    const[ errorAlturaMax, setErrorAlturaMax ] = useState("")
    const[ errorPesoMin, setErrorPesoMin ] = useState("")
    const[ errorPesoMax, setErrorPesoMax ] = useState("")
    const[ errorAñosDeVida, setErrorAñosDeVida ] = useState("")

    async function submit(event) {
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:3001/dogsRoutes/',{
                Nombre: createDog.Nombre,
                Imagen: createDog.Imagen,
                Altura_min: createDog.Altura_min,
                Altura_max: createDog.Altura_max,
                Peso_min: createDog.Peso_min,
                Peso_max: createDog.Peso_max,
                Años_de_vida: createDog.Años_de_vida,
                Temperamento: createDog.Temperamento
            })
            alert(`el perrito ${createDog.Nombre} fue creado exitosamente`)
            return res.data; 
            
        } catch (error) {
            return alert(error.response.data);
        }
        
        
    }
    //filtrado por temperamento
    //ordenamiento peso
    //ordenamiento altura

    function handle(event){
        const newDog = {...createDog}
        newDog[event.target.id] = event.target.value 
        setCreateDog(newDog)
        validate(newDog,setErrorsImagen)
        validate_Nombres(newDog,setErrorsNombre)
        validate_Altura_min(newDog,setErrorAlturaMin)
        validate_Altura_max(newDog,setErrorAlturaMax)
        validate_Peso_min(newDog,setErrorPesoMin)
        validate_Peso_max(newDog,setErrorPesoMax)
        validate_Años_de_vida(newDog,setErrorAñosDeVida)
    }
    function handleSe(event) {
        if(createDog.Temperamento.find(ele=>ele===event.target.value))return;
        setCreateDog({
            ...createDog,
            Temperamento:[...createDog.Temperamento,event.target.value]        
        })
    }
   
    useEffect(()=>{
        dispatch(getTemperamentos())
    },[dispatch])

    function deletItems(ele){
        setCreateDog({...createDog,Temperamento:createDog.Temperamento.filter(temp=>temp !== ele)})
    }
    return(
        <div className={style.container}>
            <h1>Crea a tu perrito en este apartado!!</h1>
            <form onSubmit={(ele)=>submit(ele)}>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Nombre} 
                    id="Nombre"  
                    type="text"
                    placeholder="Nombre"
                    className={errorsNombre?style.error:style.sucsess}/>
                    <span>{errorsNombre}</span>
                </div>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Imagen} 
                    id="Imagen"  
                    type="text"
                    placeholder="Imagen(url)"
                    className={errorsImagen?style.error:style.sucsess}/>  
                    <span>{errorsImagen}</span>
                </div>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Altura_min} 
                    id="Altura_min" 
                    type="number"
                    placeholder="Altura minima(cm)"
                    className={errorAlturaMin?style.error:style.sucsess}/>
                    <span>{errorAlturaMin}</span>
                </div>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Altura_max} 
                    id="Altura_max"  
                    type="number"
                    placeholder="Altura maxima(cm)"
                    className={errorAlturaMax?style.error:style.sucsess}/>
                    <span>{errorAlturaMax}</span>
                </div>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Peso_min} 
                    id="Peso_min"  
                    type="number"
                    placeholder="Peso minimo(kg)"
                    className={errorPesoMin?style.error:style.sucsess}/>
                    <span>{errorPesoMin}</span>
                </div>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Peso_max} 
                    id="Peso_max"  
                    type="number"
                    placeholder="Peso maximo(kg)"
                    className={errorPesoMax?style.error:style.sucsess}/>
                    <span>{errorPesoMax}</span>
                </div>
                <div>
                    <input 
                    onChange={(ele)=>handle(ele)} 
                    value={createDog.Años_de_vida} 
                    id="Años_de_vida"  
                    type="number"
                    placeholder="Años de vida"
                    className={errorAñosDeVida?style.error:style.sucsess}/>
                    <span>{errorAñosDeVida}</span>
                </div>
                <div>
                    <select className={style.select} onChange={(event)=>handleSe(event)}>
                        {temper?.map((temp)=>{
                            
                            return(
                                <option key={temp} name={temp}>
                                    {temp}
                                </option>
                            )
                        })}
                    </select>
                    <div>
                        {createDog.Temperamento?.map(ele=>{
                            return(<div className={style.compMap}>
                               <p>{ele}</p>
                               <span onClick={()=>deletItems(ele)}>x</span>
                            </div>)
                        })}
                    </div>
                </div>
                <button className={style.boton} type="submit">CREAR</button>
            </form>
            <Link to='/homePage'>
                <button className={style.boton}>VOLVER</button>
            </Link>
        </div>
    )
}
export default FormPage;
