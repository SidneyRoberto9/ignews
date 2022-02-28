import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIP_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "ignews",
    version: "1.0.0",
  },
});
