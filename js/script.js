const SelectRacas = document.querySelector("#selectRacas");
const botaoSeletor = document.querySelector("button");

window.addEventListener("load", () => {
    getListaRacas();
});

const getListaRacas = async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();

        console.log(data);
        if (res.ok) {
            let objRacas = Object.keys(data.message);
            console.log(objRacas);

            objRacas.forEach((raca) => {
                let opcaoRaca = `
                <option value ="${raca}">${raca}</option>
                `;
                SelectRacas.innerHTML += opcaoRaca;
            });
        };

    } catch (error) { }
};

let botaoSelecionar = document.querySelector("button");

botaoSelecionar.addEventListener("click", async () => {
    try {
        const res = await fetch(`https://dog.ceo/api/breed/${SelectRacas.value}/images/random`);
        const data = await res.json();

        let img = document.querySelector("#imgRaca");
        if(res.ok){
            img.src = data.message;
        };
    } catch (error) {
        console.log(error);
    };


});