export const validate = (valiDog,setErrors)=>{
        if(!valiDog.Imagen) setErrors("Dale, muestranos que tal es tu perrito!!");
        else{
            if(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(valiDog.Imagen)) setErrors("");
                else setErrors("Url no valida");  
        }
}

export const validate_Nombres= (newDog,setErrors)=>{
    if(!newDog.Nombre) setErrors("Dinos el nombre de tu perrito!!")
    else{
        if(newDog.Nombre.length > 20) setErrors("debe tener menos de 20 caracteres")
        else setErrors("")
    }
}
export const validate_Altura_min = (newDog,setErrors)=>{
    if(!newDog.Altura_min) setErrors("ponle una altura minima")
    else{
        if(newDog.Altura_min < 20) setErrors("debe medir como minimo 20cm")
        else setErrors("")
    }
}

export const validate_Altura_max = (newDog,setErrors)=>{
    if(!newDog.Altura_max) setErrors("ponle una altura maxima")
    else{
        if(Number(newDog.Altura_max) < Number(newDog.Altura_min)) setErrors("la altura maxima no puede ser menor que la minima")
        else setErrors("")
    }
}

export const validate_Peso_min = (newDog,setErrors)=>{
    if(!newDog.Peso_min) setErrors('ponle un peso minimo')
    else{
        if(newDog.Peso_min < 8) setErrors('debe pesar minimo 8kg')
        else setErrors('')
    }
}

export const validate_Peso_max = (newDog,setErrors)=>{
    if(!newDog.Peso_max) setErrors('ponle un peso maximo')
    else{
        if(Number(newDog.Peso_max) < Number(newDog.Peso_min)) setErrors('el peso maximo no puede ser menor que el peso minimo')
        else setErrors('')
    }
}

export const validate_Años_de_vida = (newDog,setErrors)=>{
    if(!newDog.Años_de_vida) setErrors('ponle años de vida que pueda vivir')
    else{
        if(Number(newDog.Años_de_vida) < 10 ) setErrors('debe ser poder vivir más de 10 años')
        else setErrors('')
    }
}
export const validtae_Temperamento = (newDog,setErrors)=>{
    
}




















    // validateName(valiDog,errors,setErrors)

// const validateName = (valiDog,errors,setErrors)=>{
//     if(!valiDog.Nombre) setErrors({...errors,Nombre:"Escribe el nombre de tu perrito"})
//     else{
//         if(valiDog.Nombre.length > 15 ) setErrors({...errors,Nombre:"debe de tener maximo 15 caracteres"})
//     }
//     validateAltura(valiDog,errors,setErrors)
// }
// const validateAltura = (valiDog,errors,setErrors)=>{
//     if(!valiDog.Altura_min) setErrors({...errors,Altura_min:"pon una altura"})
//         else{
//             if(valiDog.Altura_min < 9) setErrors({...errors,Altura_min:`la altura debe ser mayor a 9cm`})
//             else setErrors({...errors,Altura_min:''})
//         }
// }