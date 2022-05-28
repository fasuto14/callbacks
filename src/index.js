import './styles.css';
import { buscarHeroe, buscarPlayer } from './js/callbacks';
const heroeId = 'capi';
const playerId = 'alvarez';

//Callback = funcion mandada como argumento.
buscarHeroe(heroeId, (heroe) => {
    console.log(heroe)
});

buscarPlayer(playerId, (player) => {
    console.log(player);
    console.log('Player:');
})

