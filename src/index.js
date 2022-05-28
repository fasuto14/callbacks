import { obtenerPlayerAwait, obtenerPlayersArr } from "./js/await";
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

// 
// obtenerPlayersArr().then(players => {
//     console.table(players)
//     console.timeEnd('await')
// });
//obtenerPlayerAwait

console.time('await')
obtenerPlayerAwait('alvarea')
    .then(player => {
        console.log(player)
        console.timeEnd('await')
    }).catch(err => console.warn)
