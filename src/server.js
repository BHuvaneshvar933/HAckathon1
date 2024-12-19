import express from 'express';
import axios from 'axios';
import twilio from 'twilio';
import bodyParser from 'bodyParser';

const app = express();
app.use(bodyParser.json());

const client = twilio("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN");
app.get("/api/disasters", async (req, res) => {
  try {
    const response = await axios.get("https://www.gdacs.org/xml/rss_disasters.xml");
    res.json(response.data); 
  } catch (error) {
    res.status(500).send("Error fetching disaster data");
  }
});
app.post("/api/alert", (req, res) => {
  const { phoneNumber, message } = req.body;
  client.messages
    .create({
      body: message,
      from: "whatsapp:+14155238886", 
      to: `whatsapp:${phoneNumber}`,
    })
    .then(() => {
      res.status(200).send("Alert sent successfully");
    })
    .catch((err) => {
      res.status(500).send("Error sending alert");
    });
});
app.post("/api/subscribe", (req, res) => {
  const { whatsappNumber, location } = req.body;
  console.log(`Subscribed user: ${whatsappNumber} at ${location.latitude}, ${location.longitude}`);
  res.status(200).send("User subscribed successfully");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
