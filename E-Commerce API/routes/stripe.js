const router = require("express").Router();
//const stripe = require("stripe")("sk_test_51JfmVjLkNxs1iUaveGtrb59der2irRXDGRM4Zjn94JJ7pTyRVrhr2rU7bo2PDFv3kxEgozTIuksr1XX8ffDJ146s00TvpAXRl9");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_BACK_KEY);


router.post("/payment", (req, res) => {
    
  
    console.log(process.env.STRIPE_BACK_KEY);
    console.log(req.body);
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          console.log(stripeErr);
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  });

module.exports = router;