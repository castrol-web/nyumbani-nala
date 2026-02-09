import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_SERVER_URL || '';
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';

function Step3({ donation, customerId, frequency, back, loading }: any) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    try {
      if (frequency === 'once') {
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: { return_url: `${FRONTEND_URL}/donation/thank-you`, receipt_email: donation.email },
          redirect: 'if_required',
        });
        if (error) return alert(error.message);
        alert('One-time donation successful ❤️');
      } else {
        // Confirm setup for subscription
        const { setupIntent, error } = await stripe.confirmSetup({
          elements,
          confirmParams: { return_url: `${FRONTEND_URL}/donation/thank-you` },
          redirect: 'if_required',
        });
        if (error) return alert(error.message);

        // Activate subscription
        await axios.post(`${SERVER_URL}/api/user/payments/activate-subscription`, {
          customerId,
          paymentMethodId: setupIntent.payment_method,
          amount: donation.amount
        });

        alert('Subscription active! Thank you ❤️');
      }
    } catch (err) {
      console.error(err);
      alert('Payment error. Check console.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <PaymentElement />
      <div className="flex gap-2 mt-4">
        <button className="btn btn-outline w-1/2" onClick={back}>Back</button>
        <button className="btn btn-primary w-1/2" onClick={handleSubmit}>
          {loading ? 'Processing...' : `Donate €${donation.amount}`}
        </button>
      </div>
    </div>
  );
}

export default Step3;
