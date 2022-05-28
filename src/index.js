import { obtenerPlayersArr } from "./js/await";
//import { buscarPlayer, buscarPlayerAsync } from "./js/promesas";
//import { promesaRapida, promesaLenta, promesaMedia } from './js/promesas';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaRapida, promesaLenta, promesaMedia])
//     .then(console.log)

// buscarPlayer('alvarez1')
//     .then(player => console.log(player))
//     .catch(console.warn);
// buscarPlayerAsync('armani1')
//     .then(player => console.log(player))
//     .catch(console.warn);

console.time('await')
obtenerPlayersArr().then(players => {
    console.table(players)
    console.timeEnd('await')
});
