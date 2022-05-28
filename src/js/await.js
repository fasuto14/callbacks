import { buscarPlayerAsync, buscarPlayer1, buscarPlayer } from './promesas';
const playerIds = [
    'armani',
    'diaz',
    'perez',
    'alvarez'
]
const playersPromesas = playerIds.map(buscarPlayer)

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

export const playersCiclo = async () => {
    console.time('PlayersCiclo');
    // const players = await Promise.all(playersPromesas);
    // players.forEach(player => console.log(player))
    //for await
    for await (const player of playersPromesas) {
        console.log(player)
    }
    console.timeEnd('PlayersCiclo');
}

export const playerIfAwait = async (id) => {
    if (await buscarPlayerAsync(id).nombre === 'Julian') {
        console.log('ES EL MAS PICANTE DE RIVER');
    } else {
        console.log('Naaa')
    }
}