import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Toast({ children }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!children) return;
    console.log("setting message to " + children);
    setMessage(children);
    setTimeout(() => {
      console.log("clearing message");
      setMessage("");
    }, 2000);
  }, [children]);
  if (message) return <div className="Toast">{message}</div>;
  return null;
}

export function CheckoutForm() {
  const [message, setMessage] = useState("");
  return (
    <PayPalScriptProvider
      options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
    >
      <Toast>{message}</Toast>
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
        onApprove={async (data, actions) => {
          throw new Error("do not capture");
          const details = await actions.order.capture();
          const name = details.payer.name.given_name;
          setMessage("Transaction completed by " + name);
        }}
        onError={(error) => {
          setMessage("Error: " + error.message);
          console.error(error);
        }}
        onCancel={(data) => {
          setMessage("Transaction canceled");
          console.warn("Cancel", data);
        }}
      />
    </PayPalScriptProvider>
  );
}
