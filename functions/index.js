const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
    'sk_test_51KQCmrSB14PMAdzbhGw68YnAEvuNinDKxzFcObIjZlSbaQ35Ez9TEWLZ3UWx3IBXb7r0aYHxtyLzNqcXvG5VMzTw00znMC4ZG7'
);

// http://localhost:5001/clone-5bfad/us-central1/api

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).send("Hello from cloud");
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.api = functions.https.onRequest(app);
