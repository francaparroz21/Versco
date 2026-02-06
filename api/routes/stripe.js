import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_KEY);

// PAYMENT
router.post("/payment", async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    });

    res.status(200).json(charge);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
