import './styles.css';
import { buscarHeroe, buscarPlayer } from './js/callbacks';
const heroeId = 'capi';
const playerId = 'alvarez2';

//Callback = funcion mandada como argumento.
buscarHeroe(heroeId, (heroe) => {
    console.log(heroe)
});

buscarPlayer(playerId, (err, player) => {
    console.log('Player:');
    if (err) {
        console.error(err)
    } else {
        console.info(player)
    }

})

