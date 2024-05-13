
const ticketPrice = document.getElementById('ticket-form');

ticketPrice.addEventListener('submit', function (event) {
    event.preventDefault();

    const kmNumber = document.getElementById('km-num').value;
    const age = document.getElementById('age-num').value;
    const pricePerKm = 0.21;
    const price = kmNumber * pricePerKm;
    const underEighteenDiscount = 0.20;
    const overSixtyfiveDiscount = 0.40;


    let finalPrice = '';

    if (age < 18) {
        finalPrice = Number(price - (price * underEighteenDiscount)).toFixed(2);
        document.getElementById('discount').innerText = 'Complimenti, hai diritto a uno sconto del 20%!';
        document.getElementById('ticket-result').classList.toggle('d-none');
    }
    else if (age >= 65) {
        finalPrice = Number(price - (price * overSixtyfiveDiscount)).toFixed(2);
        document.getElementById('discount').innerText = 'Complimenti, hai diritto a uno sconto del 40%!';
        document.getElementById('ticket-result').classList.toggle('d-none');

    }
    else if (age !== Number || kmNumber !== Number) {
        document.getElementById('ticket-fail').classList.toggle('d-none');

    }

    else {
        finalPrice = Number(price).toFixed(2)
        document.getElementById('ticket-result').classList.toggle('d-none');
    };





    document.getElementById('final-price').innerText = `${finalPrice}`;


    console.log('ho inviato il form');
    console.log(`Il prezzo del tuo biglietto è ${finalPrice}€`);
});

document.getElementById('reset-button').addEventListener('click', function () {
    document.getElementById('ticket-result').classList.add('d-none');
    document.getElementById('ticket-fail').classList.add('d-none');
    document.getElementById('km-num').innerText = '';
    document.getElementById('age-num').innerText = '';
});



