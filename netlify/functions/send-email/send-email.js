const sgMail = require('@sendgrid/mail')

const handler = async function (event) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const body = JSON.parse(event.body)
  const msg = {
    to: `${process.env.CONTACT_EMAIL_ME}`,
    from: 'info@aquacodesoftware.com',
    subject: `[aquacodesoftware] Contact ${body.name}`,
    text: `${body.details} \n My contact email is ${body.email}`
  }
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: 'Message sent',
    };
  } catch (err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }

}
module.exports = { handler }