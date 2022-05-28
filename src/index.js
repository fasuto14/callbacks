import './styles.css';
import { buscarHeroe, buscarPlayer } from './js/callbacks';
const heroeId = 'capi';
const playerId1 = 'alvarez';
const playerId2 = 'perez';
const playerId3 = 'diaz';

//Callback = funcion mandada como argumento.
buscarHeroe(heroeId, (heroe) => {
    console.log(heroe)
});

buscarPlayer(playerId1, (err, player1) => {
    if (err) { return console.error(err); }

    buscarPlayer(playerId2, (err, player2) => {
        if (err) { return console.error(err); }
        console.log(`Enviando a ${player1.nombre} y a ${player2.nombre} a la cancha!!`)

        buscarPlayer(playerId3, (err, player3) => {
            if (err) { return console.error(err); }
            console.log(`Enviando a ${player1.nombre} y a ${player3.nombre} a la cancha!!`)
        })

    })
});