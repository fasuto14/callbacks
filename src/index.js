import { promesaRapida, promesaLenta, promesaMedia } from './js/promesas';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

Promise.race([promesaRapida, promesaLenta, promesaMedia])
    .then(console.log)