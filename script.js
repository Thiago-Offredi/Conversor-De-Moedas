const buttom = document.getElementById('botao')
const select = document.getElementById('currency-select')
const dolar = 5.21
const euro = 5.07
const bitcoin = 101.3
const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realValue = document.getElementById('real -value')
    const moedaValue = document.getElementById('dollar-real')


    realValue.innerHTML = new Intl.NumberFormat("pt-BR", { // definir aqui o pais 
        style: "currency", // o tipo do valor seja moeda ou outra coisa
        currency: "BRL", // moeda do pais
    }).format(input) // dentro do format colocar o calculo
    // BR
    if (select.value === 'US$ Dollar Americano') {
        moedaValue.innerHTML = new Intl.NumberFormat("en-US", { // definir aqui o pais 
            style: "currency", // o tipo do valor seja moeda ou outra coisa
            currency: "USD", // moeda do pais
        }).format(input / dolar) // dentro do format colocar o calculo
        //dollar

    }
    if (select.value === '€ Euro') {
        moedaValue.innerHTML = new Intl.NumberFormat("de-DE", { // definir aqui o pais 
            style: "currency", // o tipo do valor seja moeda ou outra coisa
            currency: "EUR", // moeda do pais
        }).format(input / euro) // dentro do format colocar o calculo
        // euro
    }
    if (select.value === '₿ Bitcoin') {
        moedaValue.innerHTML = new Intl.NumberFormat("de-DE", { // definir aqui o pais 
            style: "currency", // o tipo do valor seja moeda ou outra coisa
            currency: "BTC", // moeda do pais
        }).format(input / bitcoin) // dentro do format colocar o calculo
        // ₿ Bitcoin
    }

}
changeCurrency = () => {
    const currencyName = document.getElementById('eua')
    const img = document.getElementById('eua-img')
    if (select.value === 'US$ Dollar Americano') {
        currencyName.innerHTML = "Dollar Americano"
        img.src = "assets/estados-unidos (1) 1.png"
    }
    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        img.src = "assets/Design sem nome 1.png"
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        img.src = "assets/Design sem nome (1) 1.png"
    }
    convertValues()
}
buttom.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)