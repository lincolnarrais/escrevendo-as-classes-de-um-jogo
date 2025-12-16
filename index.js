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

const garen = new Heroi('Garen', 25, 'guerreiro');
garen.atacar();

const ryze = new Heroi('Ryze', 250, 'mago');
ryze.atacar();

const kennen = new Heroi('Kennen', 60, 'ninja');
kennen.atacar();

const leeSin = new Heroi('Lee Sin', 30, 'monge');
leeSin.atacar();