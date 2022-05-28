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