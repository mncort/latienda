import {arrayItems} from '../data/arrayItems'

export const buscarDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(arrayItems)
        },1000)
    })
}