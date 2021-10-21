import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function CheckoutForm() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "13.99",
                },
              },
            ],
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
