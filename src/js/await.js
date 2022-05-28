import { buscarPlayerAsync } from './promesas';
const playerIds = [
    'armani',
    'diaz',
    'perez',
    'alvarez'
]

export const obtenerPlayersArr = async () => {
    const playersArr = [];
    for (const id of playerIds) {
        const player = await buscarPlayerAsync(id)
        playersArr.push(player);
    }
    return playersArr;
}