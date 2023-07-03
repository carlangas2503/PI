import { Link } from "react-router-dom";
import style from './LandingPage.module.css'

function LandingPage(props){
     const imagenFond = 'https://img.freepik.com/fotos-premium/gran-grupo-perros-felices-mirando-camara-aislada-blanco_191971-28628.jpg?w=2000'
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Welcome to Henry Dogs</h1> 
            <img src={imagenFond} alt="paul" className={style.imagen} />
            <Link to='/homePage'><button className={style.boton}>START</button></Link>
            
        </div>
    )
}
export default LandingPage;