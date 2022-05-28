const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a la picadura de insectos'
    }
}
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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    callback(heroe);
}

export const buscarPlayer = (id, callback) => {
    const player = players[id];
    if (player) {
        callback(null, player);
        console.log(
            `
             El nombre del player es: ${players[id].nombre} 
             El apellido del player es: ${players[id].apellido} 
             El puesto del player es: ${players[id].puesto}
             La camiseta del player es: ${players[id].camiseta}
             El sueldo del player es: ${players[id].sueldo} de crocantes   
            `)
    } else {
        //Un error
        callback(`No existe un player con el id: ${id}`);
    }
    //callback(player);

}