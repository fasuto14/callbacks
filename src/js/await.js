import { buscarPlayerAsync, buscarPlayer1 } from './promesas';
const playerIds = [
    'armani',
    'diaz',
    'perez',
    'alvarez'
]

//Protip de dos diferentes formas.
export const obtenerPlayersArr = async () => {
    return await Promise.all(playerIds.map(buscarPlayer1));
    // const playersArr = [];
    // for (const id of playerIds) {
    //     playersArr.push(buscarPlayer1(id));
    // }
    // return await Promise.all(playersArr);
}

export const obtenerPlayerAwait = async (id) => {
    try {
        const player = await buscarPlayerAsync(id);
        return player;
    } catch (err) {
        console.log('Catch!!!')
        return {
            nombre: 'Sin Nombre',
            apellido: 'Sin Apellido',
            puesto: 'Sin Puesto',
            camiseta: 'Sin Casaca',
            sueldo: 'Sin Sueldo',
        };
    }

}