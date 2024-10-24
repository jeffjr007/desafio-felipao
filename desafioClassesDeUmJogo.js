//Desafio Classes de Um jogo
class Heroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDeClasse) {
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.tipoDeClasse = tipoDeClasse
    }

    atacar() {
        let tipoDoAtaque

        switch (this.tipoDeClasse.toLowerCase()) {
            case 'mago':
                tipoDoAtaque = 'magia'
                break
            case 'guerreiro':
                tipoDoAtaque = 'espada'
                break
            case 'monge':
                tipoDoAtaque = 'artes marciais'
                break
            case 'ninja':
                tipoDoAtaque = 'shuriken'
                break
            default:
                tipoDoAtaque = 'ataque desconhecido'
        }

        console.log(`o heroi da classe ${this.tipoDeClasse.toLowerCase()} atacou usando ${tipoDoAtaque}`)
    }
}

const ninja = new Heroi('Irlano', 100, 'Ninja')
ninja.atacar() 
