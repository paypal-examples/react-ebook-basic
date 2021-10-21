import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function CheckoutForm() {
  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.CLIENT_ID }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}
