import axios from 'axios';

export function sendOrderConfirmedEmail(email, order) {
  const url =
    'http://nostressemailsender-env.eba-ievtm2sf.eu-central-1.elasticbeanstalk.com/api/sendEmailOrderConfirmed';
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
    'http://nostressemailsender-env.eba-ievtm2sf.eu-central-1.elasticbeanstalk.com/api/sendEmailOrderSent';
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
    'http://nostressemailsender-env.eba-ievtm2sf.eu-central-1.elasticbeanstalk.com/api/sendOrderFinishedEmail';
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
