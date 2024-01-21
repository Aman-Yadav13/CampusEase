import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();
router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body?.cartItems?.map((cartItem) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: cartItem.tradeitem.itemname,
          description: cartItem.tradeitem.description,
          metadata: {
            id: cartItem.orderitem._id,
          },
        },
        unit_amount: parseFloat(cartItem.orderitem.totalPrice) * 100,
      },
      quantity: cartItem.orderitem.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
  });
  res.send({ url: session.url });
});

export default router;
