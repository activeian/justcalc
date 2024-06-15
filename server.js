const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Cheia secretă de testare
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

app.post('/create-checkout-session', async (req, res) => {
  try {
    console.log('Request received:', req.body);
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ['data.product'],
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{
        quantity: 1,
        price: prices.data[0].id,
      }],
      success_url: `${YOUR_DOMAIN}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    res.status(400).json({ error: { message: error.message } });
  }
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`));
