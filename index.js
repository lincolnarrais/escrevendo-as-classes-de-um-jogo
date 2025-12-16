class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const herois = [
    { nome: 'Garen', idade: 25, tipo: 'guerreiro' },
    { nome: 'Ryze', idade: 250, tipo: 'mago' },
    { nome: 'Kennen', idade: 60, tipo: 'ninja' },
    { nome: 'Lee Sin', idade: 30, tipo: 'monge' }
];

for (let index in herois) {
    let heroi = new Heroi(herois[index].nome, herois[index].idade, herois[index].tipo);
    heroi.atacar();
}
