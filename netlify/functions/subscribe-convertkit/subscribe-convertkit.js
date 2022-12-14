const fetch = require('node-fetch')

const handler = async function (event, context) {
  const formId = process.env.CK_FORM_ID;
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const {firstName, email} = JSON.parse(event.body);

  console.log(url);
  console.log(firstName);
  console.log(email);

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.CK_API_KEY,
        first_name: firstName,
        email: email,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });

    return {
      statusCode: 301,
      headers: {
        Location: '/success/',
      },
      // body is unused in 3xx codes, but required in all function responses
      body: 'redirecting...',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
}

module.exports = { handler }
