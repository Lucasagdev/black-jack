async function baralhoDeCartas() {
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function comprarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=6`
    const resposta = await fetch(url)
    return await resposta.json()
}

baralhoDeCartas()

let imagemFrente = '';
let mostrandoFrente = true;

async function primeiraCarta() {
    const baralho = await baralhoDeCartas();
    const carta = await comprarUmaCarta(baralho.deck_id);
    imagemFrente = carta.cards[0].image;

    const cartaElemento = document.getElementById('carta-1');
    
    cartaElemento.src = imagemFrente;
    mostrandoFrente = true;
}

function virarCarta() {
    const cartaElemento = document.getElementById('carta-1');
    const versoCarta = './imagens/verso-carta.png';

    if (mostrandoFrente) {
        cartaElemento.src = versoCarta;
        mostrandoFrente = false;
    } else {
        cartaElemento.src = imagemFrente;
        mostrandoFrente = true;
    }
}

async function segundaCarta() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-2').src = imagemCarta

}
async function terceiraCarta() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-3').src = imagemCarta

}
async function quartaCarta() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-4').src = imagemCarta

}
async function quintaCarta() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-5').src = imagemCarta

}

let imagemFrente2 = '';
let mostrandoFrente2 = true;

async function primeiraCarta2() {
    const baralho = await baralhoDeCartas();
    const carta = await comprarUmaCarta(baralho.deck_id);
    imagemFrente2 = carta.cards[0].image;

    const cartaElemento = document.getElementById('carta-1-2');
    
    cartaElemento.src = imagemFrente2;
    mostrandoFrente2 = true;
}

function virarCarta2() {
    const cartaElemento = document.getElementById('carta-1-2');
    const versoCarta = './imagens/verso-carta.png';

    if (mostrandoFrente2) {
        cartaElemento.src = versoCarta;
        mostrandoFrente2 = false;
    } else {
        cartaElemento.src = imagemFrente2;
        mostrandoFrente2 = true;
    }
}

async function segundaCarta2() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-2-2').src = imagemCarta

}
async function terceiraCarta2() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-3-2').src = imagemCarta

}
async function quartaCarta2() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-4-2').src = imagemCarta

}
async function quintaCarta2() {
    const baralho = await baralhoDeCartas()
    const carta = await comprarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta-5-2').src = imagemCarta

}