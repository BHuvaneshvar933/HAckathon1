import express from 'express';
import bodyParser from 'body-parser';
import twilio from 'twilio';

const app = express();
const port = 5000;

const twilioClient = twilio('ACb9778d356414f3e0774b1398d6af5fcf', '7fb4c4c864ac4a92773ddb5bc460ddf1');

app.use(bodyParser.json());

app.post('/send-sos', (req, res) => {
  const { phoneNumber, message } = req.body;

  twilioClient.messages.create({
    to: phoneNumber,
    from: 'your_twilio_phone_number',
    body: message,
  })
  .then(message => res.status(200).send(`Message sent: ${message.sid}`))
  .catch(error => res.status(500).send(`Error: ${error.message}`));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
