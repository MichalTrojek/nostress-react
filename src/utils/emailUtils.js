import axios from 'axios';

export function sendConfirmationEmail(email, order) {
  const url = 'http://localhost:3000/api/sendEmailOrderConfirmed';
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
      console.log(data);
    })
    .catch((error) => console.log('what error', error));
}
