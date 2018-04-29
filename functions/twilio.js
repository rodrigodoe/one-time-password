const twilio = require('twilio');

const accountSid = 'AC747836476a47610297f517f6fe7a5ef9';
const authToken = '9f10c6d48bf1e16ce6e05ec0cf611ddc';


module.exports = new twilio.Twilio(accountSid, authToken);