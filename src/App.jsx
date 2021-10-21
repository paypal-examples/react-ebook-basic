import { CheckoutForm } from "./CheckoutForm";
import "./App.css";

function App() {
  return (
    <div className="App-body">
      <h1>How to be Great at Anything</h1>
      <img
        height="300"
        src="/ebook.jpg"
        alt="How to be Great at Anything (Book Cover)"
      />
      <p>
        <span className="book-price">$13.99</span>
      </p>
      <CheckoutForm />
    </div>
  );
}

export default App;
