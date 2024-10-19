//IF, ELSE IF E ELSE

let nomeHeroi = "Irlan"
let xpDoHeroi = 5001

if (xpDoHeroi <= 1000) {
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Ferro" + " e tem " + xpDoHeroi + " de XP")

} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Bronze" + " e tem " + xpDoHeroi + " de XP")

} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Prata" + " e tem " + xpDoHeroi + " de XP")

} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Ouro" + " e tem " + xpDoHeroi + " de XP")

} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Platina" + " e tem " + xpDoHeroi + " de XP") 

} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Ascendente" + " e tem " + xpDoHeroi + " de XP")

} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Imortal" + " e tem " + xpDoHeroi + " de XP")
}else{
    console.log("O Herói de nome: " + nomeHeroi + " Está no Elo Radiante" + " e tem " + xpDoHeroi + " de XP") 
}

//SWITCH CASE

let nomeHeroi = "Irlan"
let xpDoHeroi = 2000

let elo

switch (true) {
    case (xpDoHeroi <= 1000):
        elo = "Ferro"
        break
    case (xpDoHeroi >= 1000 && xpDoHeroi <= 2000):
        elo = "Bronze"
        break
    case (xpDoHeroi >= 2000 && xpDoHeroi <= 5000):
        elo = "Prata"
        break
    case (xpDoHeroi >= 5001 && xpDoHeroi <= 7000):
        elo = "Ouro"
        break
    case (xpDoHeroi >= 7001 && xpDoHeroi <= 8000):
        elo = "Platina"
        break
    case (xpDoHeroi >= 8001 && xpDoHeroi <= 9000):
        elo = "Ascendente"
        break
    case (xpDoHeroi >= 9001 && xpDoHeroi <= 10000):
        elo = "Imortal"
        break
    default:
        elo = "Radiante"
}

console.log("O Herói de nome: " + nomeHeroi + " Está no Elo " + elo + " e tem " + xpDoHeroi + " de XP")
