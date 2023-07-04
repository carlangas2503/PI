import { useParams,Link } from "react-router-dom";
import {getDogs,deleteDetails} from '../../redux/actions'
import { useEffect} from "react";
import { useDispatch , useSelector} from 'react-redux'
import style from './Detail.module.css'

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const character = useSelector(state => state.details)

    useEffect(()=>{
         dispatch(getDogs(id))
         return()=>dispatch(deleteDetails())
    },[dispatch,id])
    return(
        <div className={style.container}>
            <h2>ID: {character?character.id:null}</h2>
            <img className={style.Imagen} src={character?character.image:null} alt={character?character.name:null} />
            <h3>{character?character.name:null}</h3>
            <p>Altura: {character?character.height:null}cm</p>
            <p>Peso: {character?character.weight:null}kg</p>
            <p>Temperamento: {character?character.temperament:null}</p>
            <p>Años de vida: {character?character.life_span:null}</p>
            <Link to='/homePage'>
             <button className={style.buton} >VOLVER</button>   
            </Link>
        </div>
    )
}
export default Detail;