const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

            if (imc < 17) {
                classification = 'Muito abaixo do peso';
                resultado.style.background = 'red';

            } else if (imc >= 17 && imc <= 18.49) {
                classification = 'Abaixo do peso'
                resultado.style.background = '#FFC93C';

            } else if (imc >= 18.5 && imc <= 24.99) {
                classification = 'Peso normal'
                resultado.style.background = 'green';

            } else if (imc >= 25 && imc <= 29.99) {
                classification = 'Excesso de peso'
                resultado.style.background = '#FFC93C';

            } else if (imc >= 30 && imc <= 34.99) {
                classification = 'obesidade Grau I'
                resultado.style.background = 'red';

            } else if (imc >= 35 && imc <= 39.99) {
                classification = 'obesidade Grau II'
                resultado.style.background = 'red';
            }

        resultado.innerHTML = `ATENÇÃO: Seu IMC é de: ${imc} e sua classificacao é: ${classification}`;
        } else {
            resultado.innerHTML = 'Preencha os campos';
            resultado.style.background = 'red';
            console.log (imc);
        }
    }


function apagar() {
    peso.value = "";
    altura.value = "";
    resultado.remove()
}


function validDigit(text){
    return text.replace(/[^0-9.]/g, "");
}

[peso, altura].forEach((el) =>{
    el.addEventListener('input', (e) => {
    const updateValue = validDigit(e.target.value);
    e.target.value = updateValue;
    })
});