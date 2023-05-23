import Layout from "./components/Layout/Layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51Lf8l1AgTZmZc93I8WL9gC87oAcsLX9MRLFgH1iCp6Bcyby5kCNP2pGU98zsmrXZF67ulzTFxxUgHWtvl1vaJEuG00fmWm12TR"
  );

  return (
    <Elements stripe={stripePromise}>
      <Layout />
    </Elements>
  );
}

export default App;
