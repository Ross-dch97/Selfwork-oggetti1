
let persona =  {
    nome : 'Rosario',
    cognome : 'Di Chiara',
    età : 27,

    saluto: function () {
        console.log(`Ciao a tutti mi chiamo ${this.nome}`);
        
    }
}

persona.saluto();

