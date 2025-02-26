console.log(typeof(document.querySelector('.js-input').value));
function sub() {
  const x = document.querySelector('.js-subscribe-button');

  if (x.innerHTML === 'Subscribe'){
    x.innerHTML = 'Subscribed';
    x.classList.add('is-subscribed');
  } else {
    x.innerHTML = 'Subscribe';
    x.classList.remove('is-subscribed');
  }
}

function calculate() {
  if (document.querySelector('.js-input').value === '') {
      return;
    }
    const y = document.querySelector('.js-input');

    let cost = Number(y.value);

    if (cost < 40){
      cost *= 100;
      cost += 1000;
      cost /= 100;
    }

    document.querySelector('.js-final').innerHTML = `$${cost}`;
}
