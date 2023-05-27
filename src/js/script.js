const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImg = document.querySelector('.pokemon-img');

const form = document.querySelector('.form');
const input = document.querySelector('.input-search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    } 
}

const renderPokemon = async (pokemon) => {

    pokemonImg.src = "./src/img/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif";
    pokemonName.innerHTML = 'Loading ...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';
    searchPokemon = data.id;
    }
    else {
        pokemonImg.src = "./src/img/0bf759ddc6e7fc9 (1).png";
        pokemonName.innerHTML = 'Not found :/';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
})

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);

const botaoAlterarTema = document.getElementById("change-theme-button");
const body = document.querySelector("body");

var telaDia = "./src/img/1089608.png";
var telaNoite = "./src/img/a56806bce812d4ec85665792d83b809b.png"; 

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    
    document.getElementById("tela").src = telaNoite;
    let aux = telaDia;
    telaDia = telaNoite;
    telaNoite = aux;
});



