const players = {
    armani: {
        nombre: 'Franco',
        apellido: 'Armani',
        puesto: 'Arquero',
        camiseta: '1',
        sueldo: 1200000,
    },
    diaz: {
        nombre: 'Paulo',
        apellido: 'Diaz',
        puesto: 'Defensor Central',
        camiseta: '2',
        sueldo: 750000,
    },
    perez: {
        nombre: 'Enzo',
        apellido: 'Perez',
        puesto: 'Volante Central',
        camiseta: '24',
        sueldo: 1500000,
    },
    alvarez: {
        nombre: 'Julian',
        apellido: 'Alvarez',
        puesto: 'Delantero',
        camiseta: '9',
        sueldo: 2000000,
    },
}

export const buscarPlayer = (id) => {
    const player = players[id];
    return new Promise((resolve, reject) => {
        if (player) {
            resolve(player)
        } else {
            reject(`No existe un player con el id: ${id}`);
        }
    });
}

export const buscarPlayerAsync = async (id) => {
    const player = players[id];
    if (player) {
        return player;
    } else {
        throw `No existe un player con el id: ${id}`;
    }
}

//Protip
export const buscarPlayer1 = (id) => {
    const player = players[id];
    return new Promise((resolve, reject) => {
        if (player) {
            setTimeout(() => {
                resolve(player)
            }, 1000);
        } else {
            reject(`No existe un player con el id: ${id}`);
        }
    });
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa lenta'), 2000 })
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa media'), 1500 })
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa rapida'), 1000 })
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}