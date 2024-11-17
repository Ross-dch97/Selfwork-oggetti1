
let persona =  {
    nome : 'Rosario',
    cognome : 'Di Chiara',
    età : 27,

    saluto: function () {
        console.log(`Ciao a tutti mi chiamo ${this.nome} ${this.cognome} e ho ${this.età} anni`);
        
    }
}

persona.saluto();

