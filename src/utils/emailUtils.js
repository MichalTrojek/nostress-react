import axios from 'axios';

export function sendOrderConfirmedEmail(email, order) {
  const url =
    'https://nostress-email-sender.azurewebsites.net/api/sendEmailOrderConfirmed';

  axios({
    method: 'post',
    url: url,
    data: {
      email: email,
      order: JSON.stringify(order),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => console.log('what error', error));
}

export function sendOrderSentEmail(email, order) {
  const url =
    'https://nostress-email-sender.azurewebsites.net/api/sendEmailOrderSent';

  axios({
    method: 'post',
    url: url,
    data: {
      email: email,
      order: JSON.stringify(order),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => console.log('what error', error));
}

export function sendOrderFinishedEmail(email, order) {
  const url =
    'https://nostress-email-sender.azurewebsites.net/api/sendOrderFinishedEmail';
  axios({
    method: 'post',
    url: url,
    data: {
      email: email,
      order: JSON.stringify(order),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => console.log('what error', error));
}
