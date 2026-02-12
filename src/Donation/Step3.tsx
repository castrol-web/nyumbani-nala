import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SERVER_URL = import.meta.env.VITE_SERVER_URL || '';
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';

function Step3({ donation, customerId, frequency, back, loading }: any) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    try {
      if (frequency === 'once') {
        // One-time donation
        const { error, paymentIntent } = await stripe.confirmPayment({
          elements,
          confirmParams: { 
            return_url: `${FRONTEND_URL}/donation/thank-you`, 
            receipt_email: donation.email 
          },
          redirect: 'if_required', // we handle redirect manually
        });

        if (error) {
          toast.error(error.message);
          return;
        }

        // If payment succeeded, show toast then redirect
        if (paymentIntent && paymentIntent.status === 'succeeded') {
          toast.success('One-time donation successful ❤️');

          // Wait a bit for toast to show, then redirect
          setTimeout(() => {
            window.location.href = `${FRONTEND_URL}/donation/thank-you`;
          }, 1500);
        }

      } else {
        // Subscription flow
        const { setupIntent, error } = await stripe.confirmSetup({
          elements,
          confirmParams: { return_url: `${FRONTEND_URL}/donation/thank-you` },
          redirect: 'if_required', // manual redirect
        });

        if (error) {
          toast.error(error.message);
          return;
        }

        // Activate subscription on backend
        await axios.post(`${SERVER_URL}/api/user/payments/activate-subscription`, {
          customerId,
          paymentMethodId: setupIntent.payment_method,
          amount: donation.amount
        });

        toast.success('Subscription active! Thank you ❤️');

        setTimeout(() => {
          window.location.href = `${FRONTEND_URL}/donation/thank-you`;
        }, 1500);
      }

    } catch (err) {
      console.error(err);
      toast.error('Payment error. Check console.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-primary/10 shadow-lg rounded-xl animate-fadeIn">
      <h2 className="text-xl font-bold mb-4 text-center">Payment</h2>
      <PaymentElement />
      <div className="flex gap-2 mt-4">
        <button className="btn btn-outline w-1/2" onClick={back}>Back</button>
        <button className="btn btn-primary w-1/2" onClick={handleSubmit}>
          {loading ? 'Processing...' : `Donate €${donation.amount}`}
        </button>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Step3;
